"use client";

import { useState } from "react";

const plans = {
  light: { name: "Meu Primeiro Céu Light", short: "Light", pages: "8 páginas", price: "R$ 69,90" },
  plus: { name: "Meu Primeiro Céu Plus", short: "Plus", pages: "16 páginas", price: "R$ 129,90" },
} as const;
type Plan = keyof typeof plans;

export default function Home() {
  const [plan, setPlan] = useState<Plan>("plus");
  const choose = (value: Plan) => {
    setPlan(value);
    document.getElementById("pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <header className="siteHeader" id="inicio">
        <a href="#inicio" aria-label="Meu Primeiro Céu — início">
          <img src="/assets/brand/logo-original.png" alt="Meu Primeiro Céu — O livro do céu da criança" />
        </a>
        <a className="headerLink" href="#storybooks">Conhecer as versões</a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img className="cosmicSymbol heroStar" src="/assets/decor/simb4-transparent.png" alt="" aria-hidden="true" />
        <div className="heroCopy">
          <p className="eyebrow">Cada nascimento inaugura um céu</p>
          <h1 id="hero-title">E cada criança inaugura um universo inteiro por descobrir.</h1>
          <p className="lead">Um livro astrológico digital e personalizado que transforma o mapa do nascimento em uma história ilustrada sobre singularidade, emoções e potenciais — do bebê ao adolescente.</p>
          <div className="actions"><a className="button action" href="#storybooks">Escolher meu Storybook</a><a href="#como">Ver como funciona</a></div>
          <ul className="trust"><li>PDF personalizado</li><li>Pistas, não previsões</li><li>Entrega digital em até 24 horas*</li></ul>
          <p className="trustFootnote">*Após o pagamento aprovado e o envio completo e correto dos dados.</p>
          <div className="introFilm" aria-label="Uma viagem pelas páginas do Storybook">
            <div className="introFilmGlow" aria-hidden="true" />
            <video muted loop playsInline controls controlsList="nodownload" preload="none" poster="/assets/media/ceu-de-breno-poster.jpg" aria-label="Vídeo demonstrativo das páginas de O Céu de Breno">
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
          <img src="/assets/media/mockup-livro-breno.webp" alt="Representação do Storybook personalizado O Céu de Breno" />
          <p>Representação artística · entrega em PDF digital</p>
        </div>
        <div className="productDesireCopy">
          <p className="eyebrow">Uma história que começa no nascimento</p>
          <h2 id="product-desire-title">O primeiro <span className="titleSky">céu</span> transformado em uma história sobre quem seu filho está se tornando.</h2>
          <p>Cada página traduz símbolos, planetas e posições em uma narrativa delicada, visual e fácil de compreender. Não é relatório, diagnóstico nem previsão: é um retrato simbólico para a família observar, sentir e guardar.</p>
          <div className="desireProof" aria-label="Características do Storybook"><span>Apenas o primeiro nome</span><span>Arte adequada à idade</span><span>8 ou 16 páginas</span></div>
          <a className="button action" href="#storybooks">Conhecer Light e Plus</a>
        </div>
      </section>

      <section className="section meaning" aria-labelledby="meaning-title">
        <img className="cosmicSymbol meaningTelescope" src="/assets/decor/simb3-transparent.png" alt="" aria-hidden="true" />
        <div className="storybookPreview">
          <div className="laptop" aria-label="Mockup de laptop exibindo o Storybook O Céu de Breno">
            <div className="laptopScreen"><div className="camera" aria-hidden="true" /><div className="videoFrame">
              <video muted loop playsInline controls controlsList="nodownload" preload="none" poster="/assets/media/ceu-de-breno-poster.jpg" aria-label="Prévia demonstrativa do Storybook O Céu de Breno"><source src="/assets/media/ceu-de-breno-scroll.mp4" type="video/mp4" /></video>
              <span className="videoBadge">Exemplo demonstrativo</span>
            </div></div><div className="laptopBase" aria-hidden="true"><span /></div>
          </div>
          <p><strong>O Céu de Breno</strong><span>Exemplo visual de personalidade, emoções, talentos e formas de acolher.</span></p>
        </div>
        <div><p className="eyebrow">Astrologia que aproxima</p><h2 id="meaning-title">Descobrir antes de definir. Celebrar antes de comparar.</h2><p className="muted">Um convite para observar com mais curiosidade, presença e delicadeza — sem determinismo, linguagem pesada ou rótulos.</p>
          <div className="benefits"><div><strong>Afetivo</strong><span>para fortalecer vínculos</span></div><div><strong>Lúdico</strong><span>para tornar o simbólico acessível</span></div><div><strong>Único</strong><span>feito com os dados do nascimento</span></div><div><strong>Prático</strong><span>com percepções para o dia a dia</span></div></div>
          <a className="button action inlineCta" href="#storybooks">Comparar Light e Plus</a>
        </div>
      </section>

      <section className="pricing" id="storybooks">
        <img className="cosmicSymbol pricingPlanet" src="/assets/decor/simb2-transparent.png" alt="" aria-hidden="true" />
        <div className="sectionTitle"><p className="eyebrow">Escolha a profundidade da leitura</p><h2>Dois Storybooks. O mesmo <span className="titleSky">céu</span> único.</h2><p>Light apresenta o essencial. Plus dobra o número de páginas e aprofunda a leitura para acompanhar o crescimento.</p></div>
        <div className="priceGrid">
          <article className="priceCard"><p className="label">Leitura essencial</p><h3>Meu Primeiro Céu Light</h3><p>8 páginas personalizadas</p><strong className="price">R$ 69,90</strong><small>pagamento único</small><ul><li>Principais forças da personalidade</li><li>Universo emocional</li><li>Talentos e formas de expressão</li><li>Orientações leves para a família</li><li>PDF digital personalizado</li></ul><button className="button secondary" onClick={() => choose("light")}>Escolher Light</button></article>
          <article className="priceCard featured"><span className="popular">Leitura aprofundada</span><p className="label">Para acompanhar o crescimento</p><h3>Meu Primeiro Céu Plus</h3><p>16 páginas personalizadas</p><strong className="price">R$ 129,90</strong><small>pagamento único</small><ul><li>Tudo o que está no Light</li><li>Comunicação, aprendizado e curiosidade</li><li>Afetos, vínculos e formas de amar</li><li>Energia, iniciativa e desafios</li><li>Mapa astral e síntese prática</li><li>Visual adaptado à faixa etária</li></ul><button className="button action" onClick={() => choose("plus")}>Escolher Plus</button></article>
        </div>
        <div className="purchaseNotices" aria-label="Informações importantes antes da compra">
          <article className="noticeCritical"><span className="noticeIcon" aria-hidden="true">!</span><div><h3>A hora exata de nascimento é indispensável</h3><p>Confirme o horário registrado na certidão de nascimento ou na Declaração de Nascido Vivo. <strong>Se você não souber essa informação com segurança, não finalize a compra.</strong> Horários aproximados podem alterar o mapa e comprometer a leitura.</p></div></article>
          <article><span className="noticeIcon" aria-hidden="true">✦</span><div><h3>Cada Storybook possui uma arte única</h3><p>As imagens desta página são ilustrativas. Personagens, elementos celestes, enquadramentos e composições poderão variar, mas serão sempre preservados o <strong>estilo aquarelado</strong>, a <strong>atmosfera celestial</strong> e a <strong>paleta de cores da opção escolhida</strong>.</p></div></article>
        </div>
      </section>

      <section className="section fitSection" aria-label="Para quem o Meu Primeiro Céu é indicado">
        <div className="fitTable">
          <article className="fitYes"><span className="fitIcon" aria-hidden="true">✦</span><h2>Este livro é para você se…</h2><ul><li>quer compreender melhor seu bebê, criança ou adolescente;</li><li>deseja reconhecer emoções, talentos e necessidades;</li><li>prefere linguagem leve e poucos termos técnicos;</li><li>valoriza uma memória para revisitar ao longo da vida.</li></ul></article>
          <article className="fitNo"><span className="fitIcon" aria-hidden="true">☾</span><h2>Este livro não é para você se…</h2><ul><li>procura previsões fechadas sobre o futuro;</li><li>espera diagnóstico psicológico, médico ou comportamental;</li><li>não tem o horário exato do nascimento;</li><li>quer um conteúdo genérico, sem personalização.</li></ul></article>
        </div>
      </section>

      <section className="section cosmicSteps" id="como">
        <img className="cosmicSymbol stepsPlanet" src="/assets/decor/simb2-transparent.png" alt="" aria-hidden="true" />
        <div className="sectionTitle"><p className="eyebrow">Do nascimento ao livro</p><h2>Como funciona em três passos</h2></div>
        <div className="steps"><article><b>1</b><h3>Escolha Light ou Plus</h3><p>Selecione 8 ou 16 páginas conforme a profundidade desejada.</p></article><article><b>2</b><h3>Informe os dados após pagar</h3><p>Envie apenas o primeiro nome, a data, a hora exata e o local de nascimento pelo formulário seguro.</p></article><article><b>3</b><h3>Receba uma memória única</h3><p>Após os dados completos, o livro é criado, revisado e enviado em PDF por e-mail em até 24 horas.</p></article></div>
      </section>

      <section className="brandManifesto" aria-labelledby="manifesto-title">
        <div className="manifestoIntro"><p className="eyebrow">Nossa forma de olhar</p><h2 id="manifesto-title">O mapa mostra sementes, não sentenças.</h2><p>Não olhamos para um mapa para dizer quem uma criança será. Buscamos pistas: potenciais, necessidades emocionais e maneiras de perceber o mundo que merecem atenção.</p></div>
        <div className="manifestoPrinciples" aria-label="Princípios do Meu Primeiro Céu"><article><span>01</span><strong>Curiosidade</strong><p>em vez de certezas</p></article><article><span>02</span><strong>Presença</strong><p>em vez de expectativas</p></article><article><span>03</span><strong>Encantamento</strong><p>em vez de rótulos</p></article></div>
        <blockquote>“Conhecer uma criança não é descobrir antecipadamente quem ela será. É prestar atenção em quem ela está se tornando.”</blockquote>
      </section>

      <section className="section testimonials" aria-labelledby="testimonials-title">
        <div className="sectionTitle"><p className="eyebrow">Muito além de uma lembrança bonita</p><h2 id="testimonials-title">O que este livro pode transformar</h2><p>Um olhar que troca comparação por curiosidade, expectativa por descoberta e rótulo por possibilidade.</p></div>
        <div className="testimonialGrid"><article className="transformationCard"><span aria-hidden="true">✦</span><h3>Mais clareza para compreender</h3><p>Reconheça características, necessidades emocionais e formas particulares de expressão.</p></article><article className="transformationCard"><span aria-hidden="true">☾</span><h3>Outro olhar sobre desafios</h3><p>Observe o que pode existir por trás de determinadas reações, sem encaixar a criança em padrões.</p></article><article className="transformationCard"><span aria-hidden="true">★</span><h3>Um retrato para revisitar</h3><p>Uma memória do céu do nascimento que ganha novos sentidos conforme seu filho cresce.</p></article></div>
      </section>

      <section className="section authority" aria-labelledby="authority-title">
        <div><p className="eyebrow">Interpretação e revisão humana</p><h2 id="authority-title">Criado por Aline Santos, astróloga e idealizadora do Meu Primeiro Céu.</h2></div>
        <div><p>Cada Storybook parte dos dados reais do nascimento, recebe uma interpretação astrológica em linguagem acessível e passa por revisão antes da entrega.</p><p>O compromisso é claro: traduzir símbolos em possibilidades úteis para a família, sem prever destinos, impor definições ou substituir avaliações profissionais.</p></div>
      </section>

      <section className="section order" id="pedido">
        <img className="cosmicSymbol orderMoon" src="/assets/decor/simb6-transparent.png" alt="" aria-hidden="true" />
        <div className="orderIntro"><p className="eyebrow">Depois da compra</p><h2 className="orderTitle"><span>Os dados da criança</span><span>ficam para depois</span></h2><p className="muted">Primeiro você escolhe e paga. Após a confirmação, recebe o formulário seguro.</p><div className="selected"><span>Storybook escolhido</span><strong>{plans[plan].name}</strong><p>{plans[plan].pages} · {plans[plan].price}</p></div></div>
        <div className="afterPurchase"><p className="eyebrow">Após a confirmação do pagamento</p><h3>Você receberá o formulário para iniciar a produção</h3><p>Serão solicitados somente os dados indispensáveis:</p><ul><li><strong>primeiro nome</strong> — nunca o nome completo;</li><li>data e hora exata do nascimento;</li><li>cidade, estado ou província e país;</li><li>faixa etária e opção de arte;</li><li>e-mail da pessoa responsável pela compra.</li></ul><div className="privacyMini"><strong>Privacidade desde o início</strong><p>O primeiro nome é suficiente para personalizar o livro. A página pública não coleta dados da criança.</p></div><p className="deadlineNote">A produção começa após o pagamento aprovado e o envio completo e correto do formulário.</p><button className="button action submit" type="button" disabled aria-disabled="true">Pagamento do {plans[plan].short} — link em configuração</button></div>
      </section>

      <section className="section faq"><div className="sectionTitle"><p className="eyebrow">Dúvidas antes da viagem</p><h2>Perguntas frequentes</h2></div><div className="faqList">
        <details><summary>Preciso entender de astrologia?</summary><p>Não. O texto é feito para famílias leigas, com linguagem leve e sem excesso de termos técnicos.</p></details>
        <details><summary>Qual é a diferença entre Light e Plus?</summary><p>O Light tem 8 páginas e apresenta os aspectos essenciais. O Plus tem 16 páginas e aprofunda comunicação, vínculos, energia, desafios e a síntese do mapa.</p></details>
        <details><summary>Posso comprar para bebê, criança ou adolescente?</summary><p>Sim. A leitura e a direção visual são adaptadas à faixa etária.</p></details>
        <details><summary>Posso comprar para alguém nascido fora do Brasil?</summary><p>Sim. Informe o horário local e o local completo do nascimento.</p></details>
        <details><summary>E se eu não souber o horário exato?</summary><p>Não finalize a compra. Consulte a certidão ou a Declaração de Nascido Vivo antes de comprar.</p></details>
        <details><summary>Preciso informar o nome completo?</summary><p>Não. Solicitamos somente o primeiro nome. O nome completo não é necessário e não será solicitado.</p></details>
        <details><summary>As artes serão idênticas às imagens da página?</summary><p>Não necessariamente. Cada Storybook tem composição própria, preservando o estilo aquarelado, a atmosfera celestial e a paleta escolhida.</p></details>
        <details><summary>Como e quando receberei?</summary><p>O PDF será enviado ao e-mail informado em até 24 horas após o pagamento aprovado e o envio completo e correto dos dados.</p></details>
      </div></section>

      <section className="manifestoClosing" aria-label="Essência do Meu Primeiro Céu"><p>Seu primeiro <span className="titleSky">céu</span> é apenas o começo.</p><h2>Cada <span className="titleSky">céu</span> é único.<br />Cada criança também.</h2><strong>O <span className="titleSky">céu</span> conta pistas. A criança escreve a história.</strong></section>

      <footer>
        <img src="/assets/brand/logo-original.png" alt="Meu Primeiro Céu — O livro do céu da criança" />
        <p>Uma história sobre singularidade, possibilidades e maneiras únicas de sentir o mundo.</p>
        <div className="legalIdentity"><strong>AS Marketing e Eventos LTDA</strong><span>CNPJ: 63.488.927/0001-32</span><span>Rua do Parque, 361, Jardim Atlântico — Goiânia — GO</span><small>Endereço fiscal</small></div>
        <a href="mailto:omeuceuinterior@gmail.com">omeuceuinterior@gmail.com</a>
        <small>© 2026 Meu Primeiro <span className="titleSky">Céu</span>. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
