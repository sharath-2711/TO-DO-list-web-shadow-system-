const input = document.getElementById("input");
const list = document.getElementById("list");

const count = document.getElementById("count");
const rank = document.getElementById("rank");
const level = document.getElementById("level");

let cleared = 0;
let currentRank = "E-RANK";

function updateSystem(){

    level.textContent = Math.floor(cleared / 5) + 1;

    let newRank = "E-RANK";
    let message = "";

    if(cleared >= 150){
        newRank = "S-RANK";
        message = `
━━━━━━━━━━━━━━━━━━━━
⚠ SYSTEM MESSAGE ⚠

[AWAKENING COMPLETE]

The Hunter has surpassed all limits.

TITLE ACQUIRED:
👑 SHADOW MONARCH

The world trembles before your power.
━━━━━━━━━━━━━━━━━━━━`;
    }
    else if(cleared >= 100){
        newRank = "A-RANK";
        message = `
━━━━━━━━━━━━━━━━━━━━
⚠ SYSTEM MESSAGE ⚠

[RANK UP]

Congratulations, Hunter.

You have ascended to
🔥 A-RANK

Only a few stand above you now.
━━━━━━━━━━━━━━━━━━━━`;
    }
    else if(cleared >= 70){
        newRank = "B-RANK";
        message = `
━━━━━━━━━━━━━━━━━━━━
⚠ SYSTEM MESSAGE ⚠

[RANK UP]

⚔️ B-RANK ACHIEVED

Your strength has increased.

New challenges await.
━━━━━━━━━━━━━━━━━━━━`;
    }
    else if(cleared >= 40){
        newRank = "C-RANK";
        message = `
━━━━━━━━━━━━━━━━━━━━
⚠ SYSTEM MESSAGE ⚠

[RANK UP]

💪 C-RANK ACHIEVED

The System recognizes your growth.

Continue clearing quests.
━━━━━━━━━━━━━━━━━━━━`;
    }
    else if(cleared >= 20){
        newRank = "D-RANK";
        message = `
━━━━━━━━━━━━━━━━━━━━
⚠ SYSTEM MESSAGE ⚠

[RANK UP]

🌟 D-RANK ACHIEVED

The path of a true Hunter begins.
━━━━━━━━━━━━━━━━━━━━`;
    }

    if(newRank !== currentRank){
        currentRank = newRank;
        alert(message);
    }

    rank.textContent = newRank;
    count.textContent = cleared;
}

function addQuest(){

    let quest = input.value.trim();

    if(quest === ""){
        alert("System Message: Please enter a quest.");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${quest}</span>

        <div class="task-buttons">

            <button class="complete-btn">
                CLEAR
            </button>

            <button class="delete-btn">
                REMOVE
            </button>

        </div>
    `;

    list.appendChild(li);

    const clearBtn = li.querySelector(".complete-btn");
    const deleteBtn = li.querySelector(".delete-btn");

    clearBtn.onclick = function(){

        if(!li.classList.contains("completed")){

            li.classList.add("completed");

            cleared++;

            updateSystem();

            setTimeout(() => {

                alert(
                "QUEST CLEARED\n\n+100 EXP GAINED"
                );

            },100);
        }
    };

    deleteBtn.onclick = function(){

        li.remove();
    };

    input.value="";
}

input.addEventListener("keypress",function(e){

    if(e.key === "Enter"){
        addQuest();
    }
});
const popup = document.getElementById("systemPopup");

function closePopup(){

    if(!popup) return;

    popup.style.opacity = "0";

    setTimeout(() => {
        popup.style.display = "none";
    },300);
}

popup.addEventListener("click", closePopup);

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){
        closePopup();
    }

});

updateSystem();
