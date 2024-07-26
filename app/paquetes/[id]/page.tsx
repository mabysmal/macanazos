import HamburgerMenu from "@/components/hamburger-menu";
import { readPaquetesContent, readPaquetesMatterData } from "@/utilities/fileReading";
import ProductCarousel from "@/components/productCarrousel";
import ReactMarkdown from "react-markdown";
import './styles.css'
import FooterMacanazos from "@/components/footerMacanazos";

export default function PaquetesPage({params}: {params: {id: string}}) {
//data= las cajitas con info que escribe papa en la pagina admin
//content= el texto largo que escribe papa con formato markdown

    const paqueteData= readPaquetesMatterData(params.id+'.mdx');
    const paqueteContent = readPaquetesContent(params.id+'.mdx');

    let paqueteImages = [
        paqueteData.thumbnail,
        paqueteData.Imagen2,
        paqueteData.Imagen3,
        paqueteData.Imagen4,
        paqueteData.Imagen5,
        paqueteData.Imagen6,
        paqueteData.Imagen7,
    ].filter(image => image !== undefined); // filtra los valores undefined

    // const montserrat = Montserrat({
    //   weight: "400",
    //   display: "swap",
    // })

    return(
        <main >
            <HamburgerMenu />

            
            <div id="contenedor de producto" className=" pt-16 pb-8 bg-blue flex flex-col md:flex-row md:justify-center md:items-start">
                <div id="contenedor de imagenes" className="flex-col w-full md:w-2/5">
                    <ProductCarousel images={paqueteImages} />
                </div>
                <div id="contenedor de texto" className="w-full md:w-2/5">
                    <h1 className="text-5xl pt-5 px-5 text-center md:text-left">{paqueteData.title}</h1>
                    <ReactMarkdown className="markdown-body" >{paqueteData.description}</ReactMarkdown>
                    <p className="texto-body">Medidas del producto:   {paqueteData.medidas}***</p>
                    <p className="texto-body">Tiempo de entrega estimado:   {paqueteData.esttime}, dependiendo de la cantidad de unidades del pedido.</p>
                    <p className="texto-precio"> {paqueteData.price}.00 MXN*</p>
                    {/* <OptionsDetails product={productData} /> */}
                    <div className="flex flex-row justify-center text-2xl w-full ">
                      <a href={`https://wa.me/+528110596823?text=${encodeURIComponent(`Hola, me interesa "${paqueteData.title}", ¿me podría dar más información del producto?`)}`} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                        <button id="Contact-Whatsapp" className="text-4xl bg-green pt-2 px-5 rounded-xl"> Contactar por Whatsapp</button>
                      </a>
                    </div>
                    <div className="flex flex-row justify-center text-2xl w-full mt-4">
                      <a href={`mailto:castillo.memo@gmail.com?subject=${encodeURIComponent(`Me interesa este producto "${paqueteData.title}"`)}&body=${encodeURIComponent(`Hola, buenas tardes. Soy [su nombre aquí], representando [nombre de la familia, escuela, empresa o institución]. Me interesa su producto [${paqueteData.title}], para [cantidad de personas para el macanazo] personas. 

                      ¿Me podría dar más información del producto?, ¿Tiene alguna promoción vigente?`)}`}>
                        <button id="Contact-Email" className="text-4xl bg-orange pt-2 px-5 rounded-xl"> Contactar por Email</button>
                      </a>
                    </div>

                </div>

                
            </div>

            <div className="asteriscos pb-8 flex-wrap bg-blue flex w-full flex-center justify-center">
              <span className="text-center text-light-blue">* El precio es por unidad individual a menos que se deje en claro en la descripción que el precio es determinado por grupos de unidades.</span>
              <span className="text-center text-light-blue ">** Se debe pagar un adelanto del 50% del precio total del pedido y mandar el material necesario para las caricaturas para iniciar su producción. El restante 50% se paga contra entrega.</span>
              <span className="text-center text-light-blue ">*** Las medidas fueron tomadas manualmente. Las medidas pueden variar de 1-2 cm</span>

            </div>


            <FooterMacanazos></FooterMacanazos>
        </main>
    );
}