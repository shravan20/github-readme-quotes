const getTemplate=template=>{
    return `
    <svg width="700px" height="250px" fill="none" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
            <style>
                ${template.css}
            </style>
            <div class="container">
                <h3> ${template.quote} </h3>
                <p>- ${
                  template.author === "Unknown" ? "Anonymous" : template.author
                } </p>
            </div>
        </div>
    </foreignObject>
    </svg>`;
}

module.exports=getTemplate;