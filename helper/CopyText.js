const CopyText = (copyTxt, type = "") => {
    const el = document.createElement('textarea');
    el.value = copyTxt;
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
export default CopyText