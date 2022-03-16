const len = document.querySelector(".password .generate input");
const out = document.querySelector(".password .output p");
const outh = document.querySelector(".password .output h");

len.value = "25";

const generate = () => {
    let v = parseInt(len.value);
    if(v != NaN) {
        if(v <= 200000) {
            let p = password(v);
            out.textContent = p;
            outh.textContent = `Length: ${p.length}`;
        }
    }
};

generate();

console.log("[Load] Index.js")

len.addEventListener("keyup", generate);

out.parentElement.addEventListener("click", () => {
    navigator.clipboard.writeText(out.textContent);
    alert("Password Copied To The Clipboard, keep it safe!");
});

setTimeout(() => {
    len.focus()
}, 1000);