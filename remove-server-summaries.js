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

var monitoringHeaderRemovalIntervalJobId = setInterval(() => {
    try {
        var target = ".xbox_monitoring .xbox__header";
        var testContainer = document.querySelector(target);
        testContainer.style.display = "none";
        clearInterval(monitoringHeaderRemovalIntervalJobId);
    }
    catch (e) {
    }
}, 100);
