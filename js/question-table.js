(() => {

    const openBtn = document.querySelector('.questions-table-wrapper__button');
    const tableWrapper = document.querySelector('.questions-table-wrapper');
    const infoText = document.querySelector('.questions-table-wrapper__txt--hidden');
    const questTable = document.querySelector('.questions-table');

    questTable.addEventListener('click', toggleClass)

    function toggleClass(event) {
        if (event.target.nodeName !== "BUTTON") {
            return;
        }
        infoText.classList.toggle('questions-table-wrapper__txt')
        tableWrapper.classList.toggle('questions-table-wrapper--opened')
    }

})();