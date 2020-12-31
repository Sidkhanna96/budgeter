import React from 'react';
import CardTool from './../CardTool/CardTool';

// import mint from './../../Images/mint.jpg';
import mint from './../../Images/mint.jpg';
import WealthSimple from './../../Images/Wealthsimple.jpg';
import WealthSimpleTrade from './../../Images/WealthsimpleTrade.jpg';
import td from './../../Images/td.jpg';

import './ToolToUse.scss';

const ToolToUse = () => {
  return (
    <div className="ToolToUseComponent">
      <p>
        It can be difficult to manually track your monthly credit card
        spendings. Use the tool below to automatically track your spendings in
        order to stick to your budget, for free.
      </p>
      <CardTool
        link="https://www.mint.com/partners"
        imageLink={mint}
        heading="Mint"
      />
      <p>
        It is smart to invest some of your money in order for it to grow over
        time. It can be complicated to invest in stocks by yourself use the
        applications below to be your financial advisor and invest for you, for
        free.
      </p>
      <CardTool
        link="https://www.wealthsimple.com/en-us/"
        imageLink={WealthSimple}
        heading="WealthSimple"
      />
      <p>
        If you're interested in investing in stocks yourself and creating your
        own portfolio use the application below:
      </p>
      <CardTool
        link="https://www.wealthsimple.com/en-ca/product/trade/"
        imageLink={WealthSimpleTrade}
        heading="Wealthsimple Trade"
      />
      <p>Looking to open a Bank Account?</p>
      <CardTool link="" imageLink={td} heading="TD Bank" />
    </div>
  );
};

export default ToolToUse;
