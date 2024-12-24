class MarqueeView {
  _marqueeList = [
    'BRAND STRATEGY & IDENTITY',
    'UI/UX DESIGN',
    'GRAPHIC & MOTION DESIGN',
    'SOCIAL MEDIA MARKETING',
    'BRAND STRATEGY & IDENTITY',
    'UI/UX DESIGN',
    'GRAPHIC & MOTION DESIGN',
    'SOCIAL MEDIA MARKETING',
    'BRAND STRATEGY & IDENTITY',
    'UI/UX DESIGN',
    'GRAPHIC & MOTION DESIGN',
    'SOCIAL MEDIA MARKETING',
  ];

  _generateMarqueItemsToRender() {
    return this._marqueeList
      .map(list => {
        return `
        <div class="slide text-white ">
                <span>
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                  >
                      <ellipse
                      cx="8.81461"
                      cy="9.55157"
                      rx="8.35732"
                      ry="8.87965"
                      transform="rotate(3.15994 8.81461 9.55157)"
                      fill="#FF7E21"
                      />
                  </svg>
                </span>
                <span>${list} </span>
        </div>
      `;
      })
      .join('');
  }

  render() {
    return `
        <div class="marquee mt-8 md:mt-[96px] border-t border-b border-white ">
          <div class="marquee-content text-white ">  
            ${this._generateMarqueItemsToRender()}
          </div>
        </div>  
            `;
  }
}

export default new MarqueeView();
