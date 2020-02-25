function opacityFromTopDistance(element, current, start, end, threshold1, threshold2) {
    threshold2 = threshold2 || threshold1;
    const endEaseIn = start + (end - start) * threshold1;
    const startEaseOut = start + (end - start) * threshold2;
    
    if (current >= start && current < endEaseIn) {
        const calculatedOpacity = (current - start)/(endEaseIn - start);
        $(element).css("opacity", calculatedOpacity);
    } else if (current >= startEaseOut && current <= end) {
        const calculatedOpacity = (current - startEaseOut)/(end - startEaseOut);
        $(element).css("opacity", 1 - calculatedOpacity);
    } else if (current >= endEaseIn && current < startEaseOut) {
        $(element).css("opacity", 1);
    } else {
        $(element).css("opacity", 0);
    }
}