
import styles from '../styles/CodigoConducta.module.css'


const codeOfConduct = () => {
    return(
        <div className={styles.wrapper}>
            <h1 className="text-purple text-2xl mb-8 font-thin">Nuestro Codigo de Conducta</h1>
              <p className="mb-4">
                  En caso de que seas testigue de conductas similares a las
                  descritas por favor contacta a <a className="text-purple">chicasprogramandoarg@gmail.com</a>
                </p>

                <p className="text-justify mb-2">
                  Declaración de valores y código de conducta para les mentores,
                  organizadores, miembres de la comunidad y público en general
                  que asiste y participa en espacios físicos y virtuales de
                  Chicas Programando. Como comunidad abierta, horizontal, y
                  facilitadora de espacios seguros para les programadores, nos
                  sostenemos sobre la buena predisposición y adhesión a nuestro
                  código de conducta. Esto implica:
                </p>

                <ol className={styles.list} >
                  <li className={styles.listItem}>
                    <span className={styles.position}>1</span>
                    Tolerancia cero frente al acoso, el abuso, la discriminación
                    selectiva, la instigación a la violencia, la extorsión, la
                    humillación y el hostigamiento. A chistes, comentarios y
                    actitudes machistas, sexistas, racistas, homofóbicos,
                    xenófobos, transodiantes y condescendientes, al uso de la
                    imagen del otre con fines humillantes, avances no deseados,
                    la intimidación deliberada, el acecho, el seguimiento, el
                    acoso con fotografía o grabación, la interrupción sostenida
                    de charlas y otros intercambios incómodos.
                  </li>

                  <li className={styles.listItem}>
                    <span className={styles.position}>2</span>

                    Entendemos que la violencia puede ser visible y/o invisible
                    y es por eso que la interpretación de estos actos no se
                    limita a expresiones físicas ni espaciales, sino que
                    comprende también las dimensiones verbales y simbólicas.
                  </li>

                  <li className={styles.listItem}>
                  <span className={styles.position}>3</span>

                    Atendemos al art. 19 de la CN y a la interpretación
                    constitucionalista en el Derecho argentino según Zaffaroni
                    (2000) y Becerra (2009). En otras palabras, entendemos por
                    libertad de expresión todos aquellos actos que no coarten
                    las libertades de otres individues ni tiendan a dañar a
                    terceres. Si les implicara y es expresada en el ámbito
                    público, entonces se convertiría en un acto de naturaleza
                    regulable y punible.
                  </li>

                  <li className={styles.listItem}>
                    <span className={styles.position}>4</span>

                    Aceptamos y buscamos abierta y explícitamente la aceptación
                    de la Otredad y la incorporación de minorías de poder y
                    grupos leídos socialmente como disidentes. Buscamos
                    construir un espacio seguro para todos los grupos
                    interseccionales.
                  </li>

                  <li className={styles.listItem}>
                    <span className={styles.position}>5</span>

                    Varones cisgénero podrán incorporarse a los eventos de
                    Chicas Programando. Entendemos que la única forma de
                    comenzar a balancear la enorme disparidad de los grupos
                    históricamente dejados afuera es construir espacios donde
                    trabajamos en comunidad, de manera interdisciplinaria,
                    colaborativa e inclusiva, siempre y cuando se adhieran al
                    código de conducta.
                  </li>

                  <li className={styles.listItem}>
                    <span className={styles.position}>6</span>

                    Defendemos la igualdad de oportunidades de formación,
                    educación, intercambio y retroalimentación antes, durante y
                    después de los eventos.
                  </li>

                  <li className={styles.listItem}>
                    <span className={styles.position}>7</span>

                    Ante una situación que no respete los valores declarados
                    anteriormente, nos comprometemos al tratamiento de estos
                    casos de manera honesta y clara; y establecemos el siguiente
                    protocolo de acción a ser utilizado y respetado por todas
                    las partes involucradas.
                  </li>
                </ol>

                <p className=" text-sm font-semibold mt-12git">Notas y referencias</p>
                <ul className="text-sm text-gray2">
                  <li className="text-justify">
                    Basterra, M., “El derecho a la intimidad”, en Sabsay, D.,
                    Manili, P., Constitución de la Nación Argentina y normas
                    complementarias. Análisis doctrinal y jurisprudencial,
                    Hammurabi, Buenos Aires, 2009.
                  </li>
                  <li className="text-justify">
                    Mir Puig, S., Derecho Penal. Parte General, B de F,
                    Montevideo-Buenos Aires, 2005.
                  </li>
                  <li className="text-justify">
                    Nino, C. S., Ética y Derechos Humanos, Astrea, Buenos Aires,
                    1989.
                  </li>
                  <li className="text-justify">
                    Zaffaroni, E. R., Alagia, A., Slokar, A., Derecho Penal.
                    Parte General, Ediar, Buenos Aires, 2000.
                  </li>
                </ul>

                <p className="text-justify text-sm text-gray2">
                  Este código de conducta se implementa en alianza con las
                  siguientes organizaciones:
                </p>

        </div>
    )

}

export default codeOfConduct;