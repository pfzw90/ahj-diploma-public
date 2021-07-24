const hyperlink = {
    full: /(?:(?:https?|ftp):\/\/)([\w/\-?=%.]+\.[\w/\-&?=%.]+)/gm,
    noprotocol:  /(?<=[\s])([\w/\-?=%.]+\.[\w/\-&?=%.]+)/gm
}
export default hyperlink;
