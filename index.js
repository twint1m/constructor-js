function DomElement(selector, height, width, bg, fontSize, text) {
    if (selector.startsWith('.')) {
      this.element = document.createElement('div');
      this.element.classList.add(selector.substring(1));
    } else if (selector.startsWith('#')) {
      this.element = document.createElement('p');
      this.element.id = selector.substring(1);
    }
    this.element.style.cssText = `
      height: ${height}px;
      width: ${width}px;
      background-color: ${bg};
      font-size: ${fontSize}px;
      position: absolute;
      top: 0px;
      left: 0px;
    `;
    this.element.textContent = text;
    document.body.appendChild(this.element);
  
    const squareMoving = (event) => {
        const key = event.key
        switch(key) {
            case 'ArrowUp':
                this.element.style.top = parseInt(this.element.style.top) - 10 + 'px'
                break
            case 'ArrowDown':
                this.element.style.top = parseInt(this.element.style.top) + 10 + 'px'
                break
            case 'ArrowLeft':
                this.element.style.left = parseInt(this.element.style.left) - 10 + 'px'
                break
            case 'ArrowRight':
                this.element.style.left = parseInt(this.element.style.left) + 10 + 'px'
                break
        }
    }
  
    document.addEventListener('keydown', squareMoving);
  }
  
  const newDomElement = new DomElement('#class', 100, 100, 'green', 15, 'Я двигаюсь на стрелочки!');