
let students = [
    {
        id: 1,
        emoji: 'π',
        name: 'M. Zakaria',
    },
    {
        id: 2,
        emoji: 'π',
        name: 'Mustafa Guldag',
    },
    {
        id: 3,
        emoji: 'π',
        name: 'Rahaf Shora',
    },
    {
        id: 4,
        emoji: 'π',
        name: 'Hafise Nur',
    },
    {
        id: 5,
        emoji: 'π',
        name: 'Buse ΕentΓΌrk',
    },
    {
        id: 6,
        emoji: 'π',
        name: 'Ufuk Deniz',
    },
    {
        id: 7,
        emoji: 'π',
        name: 'Khadija Hawa',
    },
    {
        id: 8,
        emoji: 'π',
        name: 'YeΕim Nur',
    },
    {
        id: 9,
        emoji: 'π',
        name: 'Manar Yazji',
    },
    {
        id: 10,
        emoji: 'π',
        name: 'Ali RΔ±za',
    },
    {
        id: 11,
        emoji: 'π',
        name: 'Ceyhun GΓΌlbaΕ',
    },
    {
        id: 12,
        emoji: 'π',
        name: 'Bilal Avvad',
    },
    {
        id: 13,
        emoji: 'π',
        name: 'Mohamad Ziada',
    },
    {
        id: 14,
        emoji: 'π',
        name: 'Abduallah Barmu',
    },
    {
        id: 15,
        emoji: 'π',
        name: 'Nidal Alrifai',
    },
    {
        id: 16,
        emoji: 'π',
        name: 'Moulham Hallak',
    },
    {
        id: 17,
        emoji: 'π',
        name: 'AyΕe Saflo',
    },
    {
        id: 18,
        emoji: 'π',
        name: 'Derya',
    },
    {
        id: 19,
        emoji: 'π',
        name: 'Aziza iliasova',
    },
    {
        id: 20,
        emoji: 'π',
        name: 'MHD Abdulrahman',
    },
    {
        id: 21,
        emoji: 'π',
        name: 'Isa Tekinkaya',
    },
    {
        id: 22,
        emoji: 'π',
        name: 'Duaa Alsaeed',
    },
    {
        id: 23,
        emoji: 'π',
        name: 'Kutay KaΔan',
    },
    {
        id: 24,
        emoji: 'π',
        name: 'Ayse Cimen',
    },
    {
        id: 25,
        emoji: 'π',
        name: 'unknown',
    },
]


let selectedStudents = []
const renderStudent = (students) => {
    const studentList = students.sort((a, b) => (a.name > b.name) ? 1 : -1)
    studentList.forEach(name => {
        const initList = document.querySelector('.to-select')
        const li = document.createElement('li');
        li.setAttribute("id", name.id);
        li.setAttribute("class", 'clickable');
        const nodeText = document.createTextNode(`${name.emoji} ${name.name}`);
        li.appendChild(nodeText);
        initList.appendChild(li);
    })
}
renderStudent(students)
const renderSelectedStudent = (students) => {
    const studentList = students.sort((a, b) => (a.name > b.name) ? 1 : -1)
    studentList.forEach(name => {
        const initList = document.querySelector('.selected')
        const li = document.createElement('li');
        li.setAttribute("id", name.id);
        li.setAttribute("class", 'clickable');
        const nodeText = document.createTextNode(`${name.emoji} ${name.name}`);
        li.appendChild(nodeText);
        initList.appendChild(li);
    })
}
const clickable = () => {
    const outList = document.querySelectorAll('.to-select li.clickable')
    outList.forEach(item => {
        item.addEventListener('click', function () {
            students.forEach(student => {
                if (student.id == item.id) {
                    selectedStudents.push(student)
                    students = students.filter(function (value) {
                        return value.id != item.id;
                    });
                    document.querySelector('.to-select').innerHTML = ''
                    document.querySelector('.selected').innerHTML = ''
                    renderStudent(students)
                    clickable()
                    renderSelectedStudent(selectedStudents);
                }
            })
        })
    })
}
clickable()

const selectButton = document.getElementById("pick-name");
selectButton.addEventListener('click', function () {
    if (selectedStudents.length > 0) {
        const randomNumber = Math.floor(Math.random() * selectedStudents.length) + 1;
        document.getElementById("show-name").innerHTML = '<span>πStudent is ... </span>'
        setTimeout(() => {
            const randomName = selectedStudents[randomNumber - 1].name
            document.getElementById("show-name").innerHTML = `π₯π ${randomName}`;
            document.querySelector('.to-select').innerHTML = ''
            document.querySelector('.selected').innerHTML = ''
            selectedStudents.forEach(student => {
                students.push(student)
            })
            renderStudent(students)
            selectedStudents = [];
            renderSelectedStudent(selectedStudents);
            clickable()
        }, 800);

    }
})

const clearButton = document.querySelector('#clear-btn')
clearButton.addEventListener('click', () => {
    document.querySelector('.to-select').innerHTML = ''
    document.querySelector('.selected').innerHTML = ''
    selectedStudents.forEach(student => {
        students.push(student)
    })
    renderStudent(students)
    selectedStudents = [];
    renderSelectedStudent(selectedStudents);
    clickable()
})

const toggleBtn = document.querySelectorAll('.toggleBtn');
toggleBtn.forEach(btn => {
    btn.addEventListener('click', function (e) {
        toggleBtn.forEach(btn => {
            btn.classList.remove('current')
        })
        const number = document.querySelector('.number-panel')
        const name = document.querySelector('.name-panel')
        e.target.classList.toggle('current')
        if (e.target.id === 'number-panel') {
            if (!number.classList.contains('hidden')) {
                number.classList.toggle('hidden')
                name.classList.toggle('hidden')
            }
        } else if (e.target.id === 'name-panel') {
            if (!name.classList.contains('hidden')) {
                number.classList.toggle('hidden')
                name.classList.toggle('hidden')
            }
        }
    })
})



const button = document.getElementById("generateNum");
button.addEventListener('click', function () {
    const input = document.getElementById("number");
    let max = 0
    if (input.value !== '') {
        let max = parseInt(input.value)
        document.getElementById("demo").innerHTML = '<span>πGenerating ... </span>'
        setTimeout(() => {
            document.getElementById("demo").innerHTML = (Math.floor(Math.random() * max) + 1) + ' of ' + max;
        }, 500);
    } else {
        let max = 25
        document.getElementById("demo").innerHTML = '<span>π Generating ...</span>'
        setTimeout(() => {
            document.getElementById("demo").innerHTML = (Math.floor(Math.random() * max) + 1) + ' of ' + max;
        }, 500);
    }

})