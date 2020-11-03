export default (text = "newBar") => {
    const bar = document.createElement("div");
    bar.innerHTML = text;
    bar.className ="newBar";
  
    return bar;
  };