import React from 'react';

const OurClients = () => {

    const clientLogoUrl = [
        {
            logo: "https://kota.co.uk/static/6604c2bf33b9d8e07c716b366f6fc5fd/Jamie-oliver.svg"
        },
        {
            logo: "https://kota.co.uk/static/284cbef0a66d6acf616832cb9ebec3e6/comptoir-libanais-1.svg"
        },
        {
            logo: "https://kota.co.uk/static/a5d3b025844af62719459959c4898f5b/british-red-cross.svg"
        },
        {
            logo: "https://kota.co.uk/static/d3a216911c22f6c6a4112f003f930290/sym.svg"
        },
        {
            logo: "https://kota.co.uk/static/f796b179ca21ac3f9dc4ed1ce0930e87/penguin.svg"
        },
        {
            logo: "https://kota.co.uk/static/0fbe7bb098ca0151f7d862dcb11cae7e/tangerine.svg"
        },
        {
            logo: "https://kota.co.uk/static/6518d10f96cf183bfef01836f35daf84/bounce.svg"
        },
        {
            logo: "https://kota.co.uk/static/b03f1447516c5a8609d721331736cfec/stoli.svg"
        },
        {
            logo: "https://kota.co.uk/static/558c2905304525305ceba618bc2fac36/penhaligons.svg"
        },
        {
            logo: "https://kota.co.uk/static/54e283881b90bb57d4a0f3cacdc6a232/raw.svg"
        },
        {
            logo: "https://kota.co.uk/static/cb986fb80b7a039c1fb69b767eb792f7/tribepad.svg"
        },
        {
            logo: "https://kota.co.uk/static/a85d51391523a0a6d6d748caa4093372/matchroom.svg"
        },
        {
            logo: "https://kota.co.uk/static/e03457e4f40986f1a3c2df40ee2296e9/diageo.svg"
        },
        {
            logo: "https://kota.co.uk/static/3aaa34068928d8dd0d0ae7ddc11aef35/sonovate.svg"
        },
        {
            logo: "https://kota.co.uk/static/d137d48658a60923f6b07db4723caff9/saatchi.svg"
        },
    ]

    return (
        <section className='pt-20 xl:pt-28'>
            <div className="container px-5 md:px-14 max-w-7xl  md:pt-24 lg:pt-28  mx-auto">
                <h2 className='text-5xl md:text-6xl text-center font-bold mb-14'>Our Clients</h2>
                <div className='flex flex-wrap justify-between xl:justify-center'>
                    {
                        clientLogoUrl.map((item) => (
                            <div key={item.logo} className="w-16 sm:w-24 md:w-28 md:mx-8 xl:mx-12 sm:mx-6 mx-4 my-6 md:my-10 flex items-center">
                                <img src={item.logo} className="w-full " alt="clientLogo" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default OurClients