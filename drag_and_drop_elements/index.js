const imgbox = document.querySelector('.imgBox');
const whiteboxs = document.getElementsByClassName("whitebox");

//Event listeners for draggable element imgBox
imgbox.addEventListener('dragstart', (e) => {
    console.log("vihar");
    //drag karavnu chalu kariye tyare
    e.target.className += ' hold'; //je div nu select thyu hase pic eni mate ni key mate (e) vapryo
    //hold ni pehla space aapyu kemke class add thse etle bhega na thai jaay etle
    setTimeout(() => {
        e.target.className += ' hide';
    }, 0);

});
imgbox.addEventListener('dragend', (e) => {
    console.log("chodu");
    e.target.className = 'imgBox'; //aa etla mate karyu kemke imgBox no class hide hato...jo aa na kariye to jya dragend thay 6 e div par bi class hide j ret
    //drag karvanu chhodi daie tyare
});

for (whitebox of whiteboxs) {
    whitebox.addEventListener('dragover', (e) => {
        console.log("dragover");
        e.preventDefault(); //aa na kariye to drop na thai sake bija div par
    });

    whitebox.addEventListener('dragenter', (e) => {
        console.log("dragenter");
        e.target.className += ' dashed';
    });

    whitebox.addEventListener('dragleave', (e) => {
        console.log("dragleave");
        e.target.className = 'whitebox';
    })

    whitebox.addEventListener('drop', (e) => {
        console.log("drop");
        e.target.append(imgbox);
    })
}