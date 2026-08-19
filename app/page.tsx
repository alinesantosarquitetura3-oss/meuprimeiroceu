"use client";

import { useState } from "react";

const plans = {
  light: { name: "Meu Primeiro Céu Light", short: "Light", pages: "8 páginas", price: "R$ 69,90" },
  plus: { name: "Meu Primeiro Céu Plus", short: "Plus", pages: "16 páginas", price: "R$ 129,90" },
} as const;
type Plan = keyof typeof plans;

const ageExamples = {
  bebe: {
    label: "Bebê",
    description: "Acolhimento, emoções e pistas práticas para os primeiros anos.",
    images: ["bebe1.jpg", "bebe2.jpg", "bebe3.jpg", "bebe4.jpg"],
  },
  crianca: {
    label: "Criança",
    description: "Imaginação, talentos, expressão e desenvolvimento da própria voz.",
    images: ["crianca1.jpg", "crianca2.jpg", "crianca3.jpg", "crianca4.jpg"],
  },
  adolescente: {
    label: "Adolescente",
    description: "Identidade, autonomia e linguagem visual mais madura.",
    images: ["adolescente4.jpg", "adolescente1.jpg", "adolescente2.jpg", "adolescente3.jpg"],
  },
} as const;
type Age = keyof typeof ageExamples;

export default function Home() {
  const [plan, setPlan] = useState<Plan>("plus");
  const [age, setAge] = useState<Age>("bebe");
  const choose = (value: Plan) => {
    setPlan(value);
  };

  return (
    <main>
      <header className="siteHeader" id="inicio">
        <a href="#inicio" aria-label="Meu Primeiro Céu — início">
          <img src="/assets/brand/logo-horizontal.png" alt="Meu Primeiro Céu — O livro do céu da criança" />
        </a>
        <a className="headerLink" href="#storybooks">Conhecer as versões</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="cosmicSymbol heroStar" src="/assets/decor/simb4-transparent.png" alt="" aria-hidden="true" />
        <div className="heroCopy">
          <h1 id="hero-title">Transforme o céu do nascimento da sua criança em uma história sobre quem ela é.</h1>
          <p className="lead"><strong>Um storybook personalizado para descobrir, compreender e guardar.</strong></p>
          <p className="heroDefinition">Não é um relatório técnico. É uma história personalizada para a família compreender, guardar e revisitar.</p>
          <div className="actions"><a className="button action" href="#storybooks">Escolher meu Storybook</a><a href="#como">Ver como funciona</a></div>
          <ul className="trust"><li>Livro digital em alta qualidade</li><li>Pistas, não previsões</li><li>Entrega em até 24 horas*</li></ul>
          <p className="trustFootnote">*Após o pagamento aprovado e o envio completo e correto dos dados.</p>
          <div className="introFilm" aria-label="Uma viagem pelas páginas do Storybook">
            <div className="introFilmGlow" aria-hidden="true" />
            <video autoPlay muted loop playsInline preload="metadata" poster="/assets/media/ceu-de-breno-poster.jpg" aria-label="Vídeo demonstrativo das páginas de O Céu de Breno">
              <source src="/assets/media/video-primeira-dobra-breno.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <section className="productDesire" aria-labelledby="product-desire-title">
        <img className="cosmicSymbol desirePlanet" src="/assets/decor/simb1-transparent.png" alt="" aria-hidden="true" />
        <img className="cosmicSymbol desireMoon" src="/assets/decor/simb6-transparent.png" alt="" aria-hidden="true" />
        <div className="productMockup">
          <span className="mockupSpark mockupSparkOne" aria-hidden="true">✦</span>
          <span className="mockupSpark mockupSparkTwo" aria-hidden="true">✦</span>
          <img src="/assets/media/mockup-livro-breno-transparent.webp" alt="Representação do Storybook personalizado O Céu de Breno" />
          <p>Representação artística · produto entregue em PDF de alta qualidade</p>
        </div>
        <div className="productDesireCopy">
          <p className="eyebrow">Uma história que começa no nascimento</p>
          <h2 id="product-desire-title">O primeiro <span className="titleSky">céu</span> transformado em uma história sobre quem seu filho está se tornando.</h2>
          <p>Cada página transforma símbolos, planetas e posições em uma narrativa delicada, visual e fácil de compreender: um retrato simbólico para a família observar, sentir e guardar.</p>
          <div className="desireProof" aria-label="Características do Storybook"><span>Apenas o primeiro nome</span><span>Arte adequada à idade</span><span>8 ou 16 páginas</span></div>
          <div className="digitalValue"><strong>Um livro digital pensado para ser guardado como livro.</strong><span>Leia no celular, compartilhe com pessoas importantes e imprima quando quiser.</span></div>
          <a className="button action" href="#storybooks">Conhecer Light e Plus</a>
        </div>
      </section>

      <section className="personalization" aria-labelledby="personalization-title">
        <div className="sectionTitle"><p className="eyebrow">Personalização que você consegue ver</p><h2 id="personalization-title">Nenhum <span className="titleSky">céu</span> se repete. Nenhum Storybook também.</h2><p>Não mudamos apenas o nome. A leitura, os temas, a linguagem e a direção visual acompanham a idade e o mapa de cada pessoa.</p></div>
        <div className="ageTabs" role="tablist" aria-label="Exemplos por faixa etária">
          {(Object.keys(ageExamples) as Age[]).map((key) => <button key={key} role="tab" aria-selected={age === key} className={age === key ? "active" : ""} onClick={() => setAge(key)}>{ageExamples[key].label}</button>)}
        </div>
        <p className="ageDescription">{ageExamples[age].description}</p>
        <div className="exampleGrid" role="tabpanel">
          {ageExamples[age].images.map((image, index) => <button className="exampleCard" key={image} onClick={() => window.open(`/assets/examples/${image}`, "_blank")} aria-label={`Ampliar exemplo ${index + 1} — ${ageExamples[age].label}`}><img src={`/assets/examples/${image}`} alt={`Página demonstrativa de Storybook para ${ageExamples[age].label.toLowerCase()}`} loading="lazy" /><span>Ampliar página</span></button>)}
        </div>
        <p className="examplesNote">Exemplos demonstrativos. Cada Storybook recebe composição própria, preservando a identidade aquarelada da marca.</p>
      </section>

      <section className="section meaning" aria-labelledby="meaning-title">
        <img className="cosmicSymbol meaningTelescope" src="/assets/decor/simb3-transparent.png" alt="" aria-hidden="true" />
        <div className="storybookPreview">
          <div className="laptop" aria-label="Mockup de laptop exibindo o Storybook O Céu de Breno">
            <div className="laptopScreen"><div className="camera" aria-hidden="true" /><div className="videoFrame">
              <video autoPlay muted loop playsInline preload="metadata" poster="/assets/media/ceu-de-breno-poster.jpg" aria-label="Prévia demonstrativa do Storybook O Céu de Breno"><source src="/assets/media/ceu-de-breno-scroll.mp4" type="video/mp4" /></video>
              <span className="videoBadge">Exemplo demonstrativo</span>
            </div></div><div className="laptopBase" aria-hidden="true"><span /></div>
          </div>
          <p><strong>O Céu de Breno</strong><span>Exemplo visual de personalidade, emoções, talentos e formas de acolher.</span></p>
        </div>
        <div><p className="eyebrow">Astrologia que aproxima</p><h2 id="meaning-title">Descobrir antes de definir. Celebrar antes de comparar.</h2><p className="muted">Um convite para observar com mais curiosidade, presença e delicadeza — sem determinismo, linguagem pesada ou rótulos.</p>
          <div className="benefits"><div><strong>Afetivo</strong><span>para fortalecer vínculos</span></div><div><strong>Lúdico</strong><span>para tornar o simbólico acessível</span></div><div><strong>Único</strong><span>feito com os dados do nascimento</span></div><div><strong>Prático</strong><span>com percepções para o dia a dia</span></div></div>
        </div>
      </section>

      <section className="pricing" id="storybooks">
        <img className="cosmicSymbol pricingPlanet" src="/assets/decor/simb2-transparent.png" alt="" aria-hidden="true" />
        <div className="sectionTitle"><p className="eyebrow">Escolha a profundidade da leitura</p><h2>Dois Storybooks. O mesmo <span className="titleSky">céu</span> único.</h2><p>Light apresenta o essencial. Plus dobra o número de páginas e aprofunda a leitura para acompanhar o crescimento.</p></div>
        <div className="priceGrid">
          <article className="priceCard"><p className="label">Leitura essencial</p><h3>Meu Primeiro Céu Light</h3><p>8 páginas personalizadas</p><strong className="price">R$ 69,90</strong><small>pagamento único</small><ul><li>Principais forças da personalidade</li><li>Universo emocional</li><li>Talentos e formas de expressão</li><li>Orientações leves para a família</li><li>PDF digital personalizado</li></ul><button className="button secondary" onClick={() => choose("light")}>Escolher Light</button></article>
          <article className="priceCard featured"><span className="popular">Leitura aprofundada</span><p className="label">Para acompanhar o crescimento</p><h3>Meu Primeiro Céu Plus</h3><p>16 páginas personalizadas</p><strong className="price">R$ 129,90</strong><small>pagamento único</small><ul><li>Tudo o que está no Light</li><li>Comunicação, aprendizado e curiosidade</li><li>Afetos, vínculos e formas de amar</li><li>Energia, iniciativa e desafios</li><li>Mapa astral e síntese prática</li><li>Visual adaptado à faixa etária</li></ul><button className="button action" onClick={() => choose("plus")}>Escolher Plus</button></article>
        </div>
        <div className="planComparison" aria-label="Comparação entre Light e Plus">
          <div className="comparisonHead"><span>O que muda</span><strong>Light</strong><strong>Plus</strong></div>
          <div><span>Extensão</span><b>8 páginas</b><b>16 páginas</b></div>
          <div><span>Proposta</span><b>Primeira descoberta</b><b>Visão aprofundada</b></div>
          <div><span>Personalidade, emoções e talentos</span><b>Incluído</b><b>Incluído</b></div>
          <div><span>Comunicação, vínculos, energia e desafios</span><b>—</b><b>Incluído</b></div>
          <div><span>Mapa astral e síntese prática</span><b>—</b><b>Incluído</b></div>
        </div>
        <div className="purchaseNotices" aria-label="Informações importantes antes da compra">
          <article className="noticeCritical"><span className="noticeIcon" aria-hidden="true">✓</span><div><h3>Para criar um Storybook fiel ao céu do nascimento</h3><p>Você precisará da <strong>hora exata registrada</strong> na certidão de nascimento ou na Declaração de Nascido Vivo. Ela torna a leitura precisa e personalizada. <strong>Já tem essa informação? Ela é imprescindível para gerar o livro 100% correto.</strong></p><small>Ainda não encontrou a hora? Consulte o documento antes de concluir a compra.</small></div></article>
          <article><span className="noticeIcon" aria-hidden="true">✦</span><div><h3>Cada Storybook possui uma arte única</h3><p>As imagens desta página são ilustrativas. Personagens, elementos celestes, enquadramentos e composições poderão variar, mas serão sempre preservados o <strong>estilo aquarelado</strong>, a <strong>atmosfera celestial</strong> e a <strong>paleta de cores da opção escolhida</strong>.</p></div></article>
        </div>
      </section>

      <section className="section fitSection" aria-label="Para quem o Meu Primeiro Céu é indicado">
        <div className="fitTable">
          <article className="fitYes"><span className="fitIcon" aria-hidden="true">✦</span><h2>Este livro é para você se…</h2><ul><li>ama astrologia e quer compreender melhor seu bebê, criança ou adolescente;</li><li>deseja reconhecer emoções, talentos e necessidades;</li><li>prefere linguagem leve e poucos termos técnicos astrológicos;</li><li>valoriza uma memória para revisitar ao longo da vida.</li></ul></article>
          <article className="fitNo"><span className="fitIcon" aria-hidden="true">☾</span><h2>Este livro não é para você se…</h2><ul><li>procura previsões fechadas sobre o futuro;</li><li>espera diagnóstico psicológico, médico ou comportamental;</li><li>busca respostas definitivas sobre quem a criança será;</li><li>quer um conteúdo genérico, sem personalização.</li></ul></article>
        </div>
      </section>

      <section className="section cosmicSteps" id="como">
        <img className="cosmicSymbol stepsPlanet" src="/assets/decor/simb2-transparent.png" alt="" aria-hidden="true" />
        <div className="sectionTitle"><p className="eyebrow">Do nascimento ao livro</p><h2>Como funciona em 3 passos</h2></div>
        <div className="steps"><article><b>1</b><h3>Escolha Light ou Plus</h3><p>Selecione 8 ou 16 páginas conforme a profundidade desejada.</p></article><article><b>2</b><h3>Informe os dados durante o pagamento</h3><p>Preencha o formulário seguro com o primeiro nome, a data, a hora exata e o local de nascimento.</p></article><article><b>3</b><h3>Receba uma memória única</h3><p>Após os dados completos, o livro é criado, revisado e enviado em PDF por e-mail em até 24 horas.</p></article></div>
      </section>

      <section className="brandManifesto" aria-labelledby="manifesto-title">
        <div className="manifestoIntro"><p className="eyebrow">Nossa forma de olhar</p><h2 id="manifesto-title">O mapa mostra sementes, não sentenças.</h2><p>Não olhamos para um mapa para dizer quem uma criança será. Buscamos pistas: potenciais, necessidades emocionais e maneiras de perceber o mundo que merecem atenção.</p></div>
        <div className="manifestoPrinciples" aria-label="Princípios do Meu Primeiro Céu"><article><span>01</span><strong>Curiosidade</strong><p>em vez de certezas</p></article><article><span>02</span><strong>Presença</strong><p>em vez de expectativas</p></article><article><span>03</span><strong>Encantamento</strong><p>em vez de rótulos</p></article></div>
        <blockquote>“Conhecer uma criança não é descobrir antecipadamente quem ela será. É prestar atenção em quem ela está se tornando.”</blockquote>
      </section>

      <section className="section responsibleReading" aria-labelledby="responsible-title">
        <div><p className="eyebrow">Encantamento com responsabilidade</p><h2 id="responsible-title">Uma leitura simbólica, afetiva e responsável.</h2></div>
        <p>O Meu Primeiro Céu usa a astrologia como linguagem simbólica para observar tendências, sensibilidades e possibilidades do nascimento do seu filho ou filha. Feito por uma astróloga que também é mãe e entende as dores e dúvidas do dia a dia. Ele não define destinos nem substitui acompanhamento médico, psicológico ou pedagógico. É um convite para conhecer melhor, observar com mais atenção e acompanhar cada criança com mais presença.</p>
      </section>

      <section className="section testimonials" aria-labelledby="testimonials-title">
        <div className="sectionTitle"><p className="eyebrow">Muito além de uma lembrança bonita</p><h2 id="testimonials-title">O que este livro pode transformar</h2><p>Um olhar que troca comparação por curiosidade, expectativa por descoberta e rótulo por possibilidade.</p></div>
        <div className="testimonialGrid"><article className="transformationCard"><span aria-hidden="true">✦</span><h3>Mais clareza para compreender</h3><p>Reconheça características, necessidades emocionais e formas particulares de expressão.</p></article><article className="transformationCard"><span aria-hidden="true">☾</span><h3>Outro olhar sobre desafios</h3><p>Observe o que pode existir por trás de determinadas reações, sem encaixar a criança em padrões.</p></article><article className="transformationCard"><span aria-hidden="true">★</span><h3>Um retrato para revisitar</h3><p>Uma memória do céu do nascimento que ganha novos sentidos conforme seu filho cresce.</p></article></div>
      </section>

      <section className="section order" id="pedido">
        <img className="cosmicSymbol orderMoon" src="/assets/decor/simb6-transparent.png" alt="" aria-hidden="true" />
        <div className="orderIntro"><p className="eyebrow">Pagamento e dados no mesmo fluxo</p><h2 className="orderTitle"><span>Escolha, pague</span><span>e envie os dados</span></h2><p className="muted">Durante a confirmação do pagamento, você receberá o formulário seguro para informar os dados necessários.</p><a className="button action orderReturn" href="#storybooks">Comparar Storybook Light e Plus</a></div>
        <div className="afterPurchase"><p className="eyebrow">Durante a confirmação do pagamento</p><h3>Você receberá o formulário para iniciar a produção</h3><p>Serão solicitados somente os dados indispensáveis:</p><ul><li><strong>primeiro nome</strong> — nunca o nome completo;</li><li>data e hora exata do nascimento;</li><li>cidade, estado ou província e país;</li><li>faixa etária e opção de arte;</li><li>e-mail da pessoa responsável pela compra.</li></ul><div className="privacyMini"><strong>Privacidade desde o início</strong><p>O primeiro nome é suficiente para personalizar o livro. A página pública não coleta dados da criança.</p></div><p className="deadlineNote">A produção começa após o pagamento aprovado e o envio completo e correto do formulário.</p></div>
      </section>

      <section className="section faq"><div className="sectionTitle"><p className="eyebrow">Dúvidas antes da viagem</p><h2>Perguntas frequentes</h2></div><div className="faqList">
        <details><summary>Preciso entender de astrologia?</summary><p>Não. O texto é feito para famílias leigas, com linguagem leve e sem excesso de termos técnicos.</p></details>
        <details><summary>Qual é a diferença entre Light e Plus?</summary><p>O Light tem 8 páginas e apresenta os aspectos essenciais. O Plus tem 16 páginas e aprofunda comunicação, vínculos, energia, desafios e a síntese do mapa.</p></details>
        <details><summary>Posso comprar para bebê, criança ou adolescente?</summary><p>Sim. A leitura e a direção visual são adaptadas à faixa etária.</p></details>
        <details><summary>Posso comprar para alguém nascido fora do Brasil?</summary><p>Sim. Informe o horário local e o local completo do nascimento.</p></details>
        <details><summary>Onde encontro a hora exata?</summary><p>Geralmente ela aparece na certidão de nascimento ou na Declaração de Nascido Vivo. Se não estiver com o documento em mãos, localize essa informação antes de concluir o pedido.</p></details>
        <details><summary>Preciso informar o nome completo?</summary><p>Não. Solicitamos somente o primeiro nome. O nome completo não é necessário e não será solicitado.</p></details>
        <details><summary>As artes serão idênticas às imagens da página?</summary><p>Não necessariamente. Cada Storybook tem composição própria, preservando o estilo aquarelado, a atmosfera celestial e a paleta escolhida.</p></details>
        <details><summary>Como e quando receberei?</summary><p>O livro digital em PDF de alta qualidade será enviado ao e-mail informado em até 24 horas após o pagamento aprovado e o envio completo e correto dos dados. Você poderá guardar, compartilhar e imprimir o arquivo para uso pessoal.</p></details>
      </div></section>

      <section className="manifestoClosing" aria-label="Essência do Meu Primeiro Céu"><p>Seu primeiro céu é apenas o começo.</p><h2>Cada <span className="titleSky">céu</span> é único.<br />Cada criança também.</h2><strong>O céu conta pistas. A criança escreve a história.</strong></section>

      <footer>
        <img src="/assets/brand/logo-square.png" alt="Meu Primeiro Céu — O livro do céu da criança" />
        <p>Uma história sobre singularidade, possibilidades e maneiras únicas de sentir o mundo.</p>
        <div className="legalIdentity"><strong>AS Marketing e Eventos LTDA</strong><span>CNPJ: 63.488.927/0001-32</span><span>Rua do Parque, 361, Jardim Atlântico — Goiânia — GO</span><small>Endereço fiscal</small></div>
        <a href="mailto:omeuceuinterior@gmail.com">omeuceuinterior@gmail.com</a>
        <small>© 2026 Meu Primeiro <span className="titleSky">Céu</span>. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
