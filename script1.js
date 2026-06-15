const input = document.getElementById("input");
const list = document.getElementById("list");

const count = document.getElementById("count");
const rank = document.getElementById("rank");
const level = document.getElementById("level");

let cleared = 0;

function updateSystem(){

    level.textContent = Math.floor(cleared / 5) + 1;

    if(cleared >= 150){
        rank.textContent = "S-RANK";
    }
    else if(cleared >= 100){
        rank.textContent = "A-RANK";
    }
    else if(cleared >= 70){
        rank.textContent = "B-RANK";
    }
    else if(cleared >= 40){
        rank.textContent = "C-RANK";
    }
    else if(cleared >= 20){
        rank.textContent = "D-RANK";
    }
    else{
        rank.textContent = "E-RANK";
    }

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
