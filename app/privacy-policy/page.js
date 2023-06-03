import Headersticky from '../components/headersticky'

export const metadata = {
    title: 'Política de privacidad'
}

export default function Privacypolicy() {
    return (
        <main>
            <Headersticky></Headersticky>
            <div className="container">
                <div className="col-lg-8 align-self-center pt-80">
                    <div className='text-center'>
                        <h1 className='text-900 policy-privacy'>Términos y Condiciones del Chatbot</h1>
                        <div className='pb-80 pt-50'>
                            <p>El presente documento establece los términos y condiciones de uso del chatbot proporcionado por Rai bot a los usuarios  que acceden y utilizan el chatbot.</p>
                            <p>1.	Aceptación de los <span className='text-primary'>Términos y Condiciones</span>: Al utilizar el chatbot, usted acepta cumplir con los términos y condiciones establecidos en este documento. Si no está de acuerdo con estos términos, le solicitamos que no utilice el chatbot.</p>
                            <p>2.	Uso del Chatbot: El chatbot se proporciona con el propósito de brindar información y asistencia automatizada. Usted acepta utilizar el chatbot únicamente para fines legales y de acuerdo con las leyes y regulaciones aplicables. No debe utilizar el chatbot para ningún propósito ilegal, difamatorio, ofensivo o que viole los derechos de terceros.</p>
                            <p>3.	Limitaciones de Responsabilidad: El chatbot se proporciona &apos;tal cual&apos; y no garantizamos su disponibilidad, exactitud o adecuación para un propósito específico. No nos hacemos responsables de cualquier daño o perjuicio directo, indirecto, incidental o consecuente derivado del uso del chatbot.</p>
                            <p>4.	Privacidad y Protección de Datos: La información que usted proporcione al chatbot puede estar sujeta a nuestra política de privacidad y protección de datos. Nos comprometemos a proteger su privacidad y a utilizar la información de acuerdo con las leyes de privacidad aplicables.</p>
                            <p>5.	Propiedad Intelectual: Todos los derechos de propiedad intelectual relacionados con el chatbot, incluyendo derechos de autor, marcas comerciales y otros derechos de propiedad, pertenecen a la empresa. Usted se compromete a no copiar, modificar, distribuir, transmitir, exhibir, vender, licenciar o utilizar de cualquier manera los contenidos del chatbot sin nuestro consentimiento previo por escrito.</p>
                            <p>6.	Modificaciones y Terminación: Nos reservamos el derecho de modificar, suspender o terminar el chatbot en cualquier momento y sin previo aviso. Asimismo, nos reservamos el derecho de actualizar estos términos y condiciones en cualquier momento. Es su responsabilidad revisar regularmente estos términos y condiciones.</p>
                            <p>7.	Ley Aplicable y Jurisdicción: Estos términos y condiciones se regirán e interpretarán de acuerdo con las leyes del país donde se encuentra registrada la empresa. Cualquier disputa que surja en relación con el chatbot se someterá a la jurisdicción exclusiva de los tribunales competentes de dicho país.Al utilizar el chatbot, usted reconoce haber leído, comprendido y aceptado estos términos y condiciones en su totalidad. Si tiene alguna pregunta o inquietud, puede ponerse en contacto con nosotros a través de los canales de comunicación proporcionados.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}