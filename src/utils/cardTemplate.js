const generateTemplate = (theme, data) => {
    
    return (
    `<svg width="100%" height="480" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
        <g class="layer">
            <title>Layer 1</title>
            <rect fill="#${theme.bg_color}" height="103" id="svg_1" opacity="0.85" stroke="#${theme.bg_color}" stroke-width="1" width="502.00002" x="73.00001" y="30"/>
            <text x="165" y="90" font-family="Times New Roman" font-size="35" fill="#${theme.title_color}">"${data.quote}"</text>
        </g>
    </svg>`
    );

}

module.exports = {
    generateTemplate
};