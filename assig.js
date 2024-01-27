const FlagST = {
    Banaadir: 'banaadirFlag',
    Jubaland: 'JubalandFlag',
    Soomaliland: 'SoomalilandFlag',
    Hirshabeele: 'HirshabeeleFlag',
    Galmudug: 'GalmudugFlag',
    KonfurGalbeed: 'KonfurGalbeedFlag',
    Puntland: 'PuntlandFlag',
    Khaatumo: 'KhaatumoFlag'
};

function StageFlag() {
    const Stageselect = document.getElementById('Stage');
    const flagimage = document.getElementById('flagimage');
    const selectedStage = Stageselect.options[Stageselect.selectedIndex].value;

    // Hide all flags
    const flags = flagimage.querySelectorAll('.flag');
    flags.forEach((flag) => {
        flag.style.display = '';
    });

    // Show the selected flag
    const flag = FlagST[selectedStage];
    const selectedFlag = flagimage.querySelector(`[data-flag="${flag}"]`);
    if (selectedFlag) {
        selectedFlag.style.display = 'block';
    }
}

