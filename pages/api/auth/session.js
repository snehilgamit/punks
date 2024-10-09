import User from "@/models/User";
import mongoDB from "@/utils/mongoDB";
import { isHashValid } from "@/utils/telegramAuth";

export default async function session(req, res) {
    if (req.method !== 'POST') {
        return res.json({ ok: false, message: 'Invalid request' })
    }
    try {
        await mongoDB()
        const { data } = req.body
        const userData = Object.fromEntries(new URLSearchParams(data))
        const { id } = JSON.parse(userData.user)
        const findUser = await User.findOne({ user_id: id })
        if (findUser) {
            const isValid = await isHashValid(userData, process.env.BOT_TOKEN)
            if (isValid) {
                return res.json({ ok: true, message: null, referralCode: findUser.referralCode })
            }
            return res.json({ ok: false, message: 'Invalid hash' })
        }
        return res.json({ ok: false, message: 'Invalid account' })

    } catch (e) {
        console.log(e)
        return res.json({ ok: false, message: 'Error while accessing account' })
    }
}

