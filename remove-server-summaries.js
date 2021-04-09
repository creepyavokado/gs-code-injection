var xserverRemovalIntervalJobId = setInterval(() => {
    try {
        let cssClassSelector = "xserver";
        let xservers = document.getElementsByClassName(cssClassSelector);
        let lastIndex = xservers.length - 1;
        let lastItem = xservers[lastIndex];
        lastItem.style.display = "none";
        clearInterval(xserverRemovalIntervalJobId);
    }
    catch (e) {
    }
}, 100);