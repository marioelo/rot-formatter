const rutFormatter = value => {

    const rawValue = value.replace(/^0|[^kK0-9 ]|\s/g, "");
    let formatted = "";

    if (rawValue !== '' && rawValue.length > 1) {
        const rut = rawValue.substring(0, rawValue.length - 1);
        const dv = rawValue.substring(rawValue.length - 1);

        let aux = 1;
        for (let i = rut.length - 1; i >= 0; i--) {
            const char = rut.charAt(i);
            formatted = char + formatted;
            if (aux % 3 === 0 && aux <= rut.length - 1) {
                formatted = "." + formatted;
            }
            aux++;
        }
        formatted = `${formatted}-${dv.toUpperCase()}`;
    }
    return formatted || rawValue;
}

export default rutFormatter;