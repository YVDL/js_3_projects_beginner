let data = [
    {
        name: 'Youri',
        age: '37'
    },
    {
        name: 'Jan',
        age: '40'
    },
    {
        name: 'Jef',
        age: '81'
    },
    {
        name: 'Stan',
        age: '20'
    },
    {
        name: 'Lotte',
        age: '36'
    },
    {
        name: 'Jules',
        age: '6'
    },
    {
        name: 'Emile',
        age: '4'
    }
];

const info = document.querySelector('#info')

let details = data.map(function (item) {
    return (
        '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>'
    )
})

info.innerHTML = details.join('\n');