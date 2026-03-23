/**
 * Contenido completo de los artículos del Diario de a Bordo.
 * Cada sección puede tener: title, content (párrafo), list (puntos), tip (caja destacada).
 */
export const ARTICLES_CONTENT = [
    {
        slug: 'lactancia-materna',
        title: '¿Cómo saber si mi bebé toma suficiente leche?',
        readTime: '3 min',
        icon: '🍼',
        accentColor: '#A569BD',
        date: 'Marzo 2025',
        intro: 'Uno de los miedos más comunes de las mamás lactantes es no saber si su bebé está tomando suficiente leche. A diferencia del biberón, en el pecho no puedes ver los mililitros. Pero hay señales muy claras que me indican, como pediatra, que la lactancia va bien.',
        sections: [
            {
                title: '¿Cuántas veces debe comer mi bebé?',
                content: 'Los primeros días de vida, un recién nacido necesita mamar entre 8 y 12 veces en 24 horas. El estómago de un recién nacido es del tamaño de una cereza al nacer, por lo que necesita pequeñas cantidades muy frecuentes. No esperes más de 3 horas sin ofrecer el pecho, especialmente en las primeras semanas.',
                list: [
                    'Días 1–3: el calostro (leche inicial dorada) es exactamente lo que tu bebé necesita, aunque sea poco.',
                    'Semana 1–2: el estómago crece y las tomas se van espaciando un poco.',
                    'Primer mes: 8–10 tomas por día es completamente normal.',
                ],
            },
            {
                title: 'Los pañales no mienten',
                content: 'El número de pañales mojados y sucios es uno de los mejores indicadores de que tu bebé está recibiendo suficiente leche. Lleva esta cuenta los primeros días.',
                list: [
                    'Días 1–2: 1 a 2 pañales mojados por día (orina oscura es normal).',
                    'Días 3–4: 3 a 4 pañales mojados y la orina comienza a aclararse.',
                    'Día 5 en adelante: mínimo 6 pañales mojados al día con orina clara o amarillo pálido.',
                    'Popó: varía mucho, pero en las primeras semanas pueden tener 3–4 por día.',
                ],
            },
            {
                title: 'Cómo saber si el agarre está bien',
                content: 'Un buen agarre es la base de una lactancia exitosa. Un mal agarre puede causar dolor en la mamá y que el bebé no tome suficiente leche, aunque esté al pecho mucho tiempo.',
                list: [
                    'Boca muy abierta al momento del agarre, como si bostezara.',
                    'Labios evertidos (hacia afuera), no fruncidos.',
                    'Mentón tocando el pecho de la mamá.',
                    'Se escucha y se nota cuando el bebé traga.',
                    'Dolor persistente es señal de mal agarre — siempre se puede corregir.',
                ],
                tip: 'El dolor inicial durante los primeros segundos de cada toma puede ser normal mientras los pezones se adaptan. Pero si el dolor dura toda la toma o hay grietas que no mejoran, es momento de buscar ayuda de una asesora de lactancia o tu pediatra.',
            },
            {
                title: 'El peso: el indicador más confiable',
                content: 'La báscula es tu aliada, no tu enemiga. El peso corporal es la forma más objetiva de saber si la nutrición está siendo suficiente.',
                list: [
                    'Es normal perder hasta el 7–10% del peso al nacer en los primeros días.',
                    'El bebé debe recuperar su peso de nacimiento antes del día 14.',
                    'A partir de entonces: espera una ganancia de 150–200 g por semana el primer mes.',
                    'Si el bebé no gana peso adecuadamente, consulta antes de cambiar la lactancia.',
                ],
            },
        ],
        conclusion: 'La lactancia materna es la mejor nutrición para tu bebé durante los primeros 6 meses de vida. Requiere apoyo, paciencia y práctica tanto de la mamá como del bebé. Recuerda que cada díada (mamá-bebé) es única. No estás sola en este proceso: consulta a tu pediatra ante cualquier duda antes de tomar decisiones que puedan afectar la lactancia.',
        ctaText: '¿Tienes dudas sobre la lactancia de tu bebé? Agenda una consulta.',
    },
    {
        slug: 'sueno-recien-nacido',
        title: 'El sueño del recién nacido: Mitos y realidades',
        readTime: '5 min',
        icon: '💤',
        accentColor: '#5B6FA8',
        date: 'Abril 2025',
        intro: 'El sueño es uno de los temas que más preguntas genera en el consultorio durante las primeras semanas. Los recién nacidos duermen mucho... pero no como nosotros esperamos. Aquí desmonto los mitos más comunes y te explico qué es realmente normal.',
        sections: [
            {
                title: '¿Cuánto duerme un recién nacido?',
                content: 'Un recién nacido sano duerme entre 16 y 18 horas al día, pero distribuidas en períodos de 2 a 4 horas. Esto puede parecer mucho, pero cada ciclo de sueño termina y el bebé se despierta para comer.',
                list: [
                    '0–1 mes: 16–18 horas diarias en fragmentos cortos.',
                    '1–3 meses: los tramos nocturnos comienzan a alargarse un poco.',
                    '3–6 meses: muchos bebés hacen tramos de 4–6 horas de noche.',
                    '6–12 meses: la mayoría puede dormir 6–10 horas seguidas de noche.',
                ],
                tip: 'Los primeros 2 meses no distinguen bien el día de la noche. Puedes ayudar exponiendo al bebé a la luz natural durante el día y manteniendo el cuarto oscuro y tranquilo de noche.',
            },
            {
                title: 'Mitos vs. Realidades',
                content: 'Hay mucha información incorrecta sobre el sueño infantil. Te presento los mitos más frecuentes que escucho en el consultorio:',
                list: [
                    '❌ MITO: "Un bebé que no duerme toda la noche tiene un problema." → ✅ Despertar 2–3 veces por noche es completamente normal hasta los 6–12 meses.',
                    '❌ MITO: "Si le das fórmula, dormirá más." → ✅ No existe evidencia científica de que la fórmula mejore el sueño.',
                    '❌ MITO: "Si lo acuesto boca abajo, duerme mejor." → ✅ SIEMPRE boca arriba. Es la única posición recomendada para prevenir el Síndrome de Muerte Súbita del Lactante (SMSL).',
                    '❌ MITO: "Si lo dejo llorar, aprenderá a dormir solo desde bebé." → ✅ En menores de 4 meses, el llanto siempre requiere respuesta. No existe la "autoregulación" a esta edad.',
                    '❌ MITO: "No debo cargarlo de noche o se mal acostumbrará." → ✅ No se puede malacostumbrar a un recién nacido. Responder sus necesidades genera seguridad emocional.',
                ],
            },
            {
                title: 'Sueño seguro: las reglas que salvan vidas',
                content: 'El ambiente de sueño seguro es una de las recomendaciones más importantes de la pediatría moderna para prevenir accidentes y el SMSL.',
                list: [
                    '✅ SIEMPRE boca arriba (posición supina).',
                    '✅ Superficie firme y plana (colchón de cuna o moisés).',
                    '✅ Sin almohadas, cobijas sueltas, protectores de cuna ni juguetes.',
                    '✅ Cuarto compartido con los papás (no la misma cama) los primeros 6 meses.',
                    '✅ Temperatura ambiental cómoda (18–22°C), sin abrigar en exceso.',
                    '✅ Sin humo de cigarro en el ambiente.',
                ],
                tip: 'Compartir cuarto (no cama) con el bebé reduce hasta un 50% el riesgo de muerte súbita, según la Academia Americana de Pediatría.',
            },
            {
                title: '¿Cuándo buscar ayuda?',
                content: 'El sueño fragmentado es normal, pero hay señales que sí requieren evaluación médica.',
                list: [
                    'Dificultad para despertar al bebé para comer en las primeras semanas.',
                    'Ronquidos, pausas en la respiración o respiración muy irregular.',
                    'Llanto inconsolable a horas fijas (puede ser cólico, APLV u otras causas).',
                    'Que a los 4 meses no haya ninguna tendencia a dormir más de noche.',
                ],
            },
        ],
        conclusion: 'El sueño del bebé es un proceso de maduración neurológica. No hay atajos que funcionen de forma segura en los primeros meses. Con paciencia, rutinas simples a partir de los 2–3 meses y un ambiente seguro, tu bebé irá consolidando su sueño poco a poco. Y tú también dormirás más.',
        ctaText: '¿Tu bebé tiene problemas para dormir? Podemos orientarte.',
    },
    {
        slug: 'fiebre-primeros-meses',
        title: 'Fiebre en los primeros 3 meses: ¿Qué hacer?',
        readTime: '4 min',
        icon: '🤒',
        accentColor: '#C0392B',
        date: 'Mayo 2025',
        intro: 'En los bebés menores de 3 meses, la fiebre es una emergencia médica hasta que se demuestre lo contrario. Esta es una de las situaciones que más miedo genera en los papás, y con razón. Aquí te explico por qué es urgente y qué debes hacer.',
        sections: [
            {
                title: '¿Qué temperatura se considera fiebre?',
                content: 'La forma más confiable de medir la temperatura en un lactante menor de 3 meses es la medición rectal. Es la más precisa y la que usamos como referencia clínica.',
                list: [
                    '🌡️ Temperatura rectal ≥ 38.0°C (100.4°F) = FIEBRE en menores de 3 meses.',
                    '⚠️ Los termómetros de oído y de frente NO son confiables en esta edad.',
                    '⚠️ La temperatura axilar puede subestimar la fiebre real.',
                    '✅ Usa siempre un termómetro digital rectal para bebés menores de 3 meses.',
                ],
                tip: 'Aprende a tomar bien la temperatura rectal antes de que sea urgente. Pídele a tu pediatra que te enseñe en la consulta. Valdrá la pena tener esa habilidad.',
            },
            {
                title: '¿Por qué es tan grave la fiebre a esta edad?',
                content: 'El sistema inmune de un recién nacido aún está en desarrollo. Esto hace que las infecciones puedan diseminarse rápidamente y ser graves antes de que el bebé muestre síntomas evidentes.',
                list: [
                    'Pueden tener infecciones graves (sepsis, meningitis, infección urinaria) con síntomas muy sutiles.',
                    'La fiebre puede ser el único signo de una enfermedad bacteriana seria.',
                    'Las primeras horas de evaluación y tratamiento son críticas.',
                    'Por eso el protocolo médico indica hospitalización y estudios en todo lactante menor de 28 días con fiebre, y evaluación urgente en menores de 3 meses.',
                ],
            },
            {
                title: 'Si tu bebé menor de 3 meses tiene fiebre: VE A URGENCIAS',
                content: 'No esperes. No des medicamento primero para "bajar la fiebre y ver qué pasa". El bebé necesita ser evaluado por un médico de inmediato.',
                list: [
                    '🚨 Acude a urgencias pediátricas de inmediato.',
                    '🚨 No des paracetamol ni ibuprofeno sin indicación médica en esta edad.',
                    '🚨 No abrigues más al bebé para "sudarla" — esto puede empeorar la temperatura.',
                    '🚨 No le des aspirina NUNCA a un bebé (riesgo de síndrome de Reye).',
                    '🚨 No esperes a que se le pase sola.',
                ],
            },
            {
                title: 'Señales de alarma adicionales (lleva a urgencias sin importar la temperatura)',
                content: 'Incluso sin fiebre, estos signos en un bebé pequeño requieren evaluación médica urgente:',
                list: [
                    'Fontanela (mollera) abultada o muy hundida.',
                    'Llanto muy agudo, inconsolable, o al contrario, bebé muy quieto y difícil de despertar.',
                    'Manchas rojas, moradas o café en la piel que no desaparecen al presionar.',
                    'Dificultad para respirar, aleteo nasal o tiraje (hundimiento entre costillas).',
                    'Rechazo a comer o vómitos frecuentes.',
                    'Color amarillo intenso (ictericia), piel muy pálida o azulada.',
                ],
                tip: 'Si algo en tu bebé "no se ve bien" aunque no sepas exactamente qué es, confía en tu instinto. Los papás conocen a su hijo mejor que nadie. Ante la duda, siempre consulta.',
            },
        ],
        conclusion: 'La fiebre es un síntoma, no una enfermedad. En bebés mayores de 6 meses muchas veces es manejable en casa con indicaciones médicas. Pero en los primeros 3 meses de vida, siempre requiere evaluación médica inmediata. No pierdas tiempo valioso: lleva a tu bebé a urgencias.',
        ctaText: '¿Tienes preguntas sobre la salud de tu bebé? Estoy aquí para ayudarte.',
    },
];

/**
 * Busca un artículo por su slug.
 * @param {string} slug
 * @returns {object|undefined}
 */
export function getArticleBySlug(slug) {
    return ARTICLES_CONTENT.find(a => a.slug === slug);
}
