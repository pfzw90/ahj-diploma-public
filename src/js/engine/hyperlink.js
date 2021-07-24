const hyperlink = {
    full: /(?:(?:https?|ftp):\/\/)([\w/\-?=%.]+\.[\w/\-&?=%.]+)/gm,
    noprotocol:  /(?<!(?:(?:https?|ftp):\/\/))([\w/\-?=%.]+\.[\w/\-&?=%.]+)/gm
}
export default hyperlink;
