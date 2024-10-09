import User from "@/models/User";
import mongoDB from "@/utils/mongoDB";
import { isHashValid } from "@/utils/telegramAuth";
export default async function signup(req, res) {
    if (req.method !== 'POST') {
        return res.json({ ok: false, message: 'Invalid request' })
    }
    try {
        await mongoDB()
        const { data } = req.body
        if(!data){
            return res.json({ok:false,message:'Hash is not provided.'})
        }
        const userData = Object.fromEntries(new URLSearchParams(data));
        const { id, first_name, last_name, username } = JSON.parse(userData.user)
        const findUser = await User.findOne({ user_id: id })
        if (!findUser) {
            const isValid = await isHashValid(userData, process.env.BOT_TOKEN)
            if (isValid) {
                const referralCode = userData.hash.slice(0, 14)
                const enteredReferralCode = userData.start_param
                const findFriend = await User.findOne({ referralCode: enteredReferralCode })
                const newUser = {
                    user_id: id,
                    first_name,
                    last_name,
                    username,
                    referralCode,
                    enteredReferralCode
                }
                findFriend ?newUser.referralOnboarding = 1 : null
                findFriend ? null : newUser.enteredReferralCode = ''
                const createUser = await User.updateOne(newUser)
                if (createUser) {
                    return res.json({ ok: true, message: 'Done' })
                }
                return res.json({ ok: false, message: 'Something went wonrg' })
            }
            return res.json({ ok: false, message: 'Invalid hash' })
        }
        return res.json({ ok: false, message: 'Account exist' })

    } catch (e) {
        console.log(e)
        return res.json({ ok: false, message: 'Error while creating account' })
    }
}


