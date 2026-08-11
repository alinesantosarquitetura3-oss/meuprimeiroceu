"use client";

import { useState } from "react";

const plans = {
  resumido: { name: "Storybook Resumido", pages: "8 páginas", price: "R$ 69,90" },
  completo: { name: "Storybook Completo", pages: "16 páginas", price: "R$ 129,90" },
} as const;
type Plan = keyof typeof plans;

export default function Home() {
  const [plan, setPlan] = useState<Plan>("completo");
  const choose = (value: Plan) => {
    setPlan(value);
    document.getElementById("pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <section className="openingHero" id="inicio" aria-label="Meu Primeiro Céu — Storybook personalizado do nascimento">
        <img src="/assets/media/home-pagina.png" alt="Meu Primeiro Céu — Storybook personalizado em universo celestial de aquarela" />
      </section>

      <section className="hero">
        <img className="cosmicSymbol heroStar" src="/assets/decor/simb4-transparent.png" alt="" aria-hidden="true" />
        <div className="heroCopy">
          <p className="eyebrow">Um novo olhar para acompanhar cada fase</p>
          <h1>Antes mesmo de conhecer o mundo, seu filho já tinha um <span className="titleSky">céu</span> só dele.</h1>
          <p className="lead">Transformamos o mapa astral do nascimento em um storybook personalizado, leve e visual — uma leitura para compreender melhor seu bebê, sua criança ou seu adolescente.</p>
          <div className="introFilm" aria-label="Uma primeira viagem pelas páginas do Storybook">
            <div className="introFilmGlow" aria-hidden="true" />
            <video autoPlay muted loop playsInline controls controlsList="nodownload" preload="metadata" aria-label="Vídeo apresentando as páginas de O Céu de Breno">
              <source src="/assets/media/video-primeira-dobra-breno.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="actions"><a className="button action" href="#storybooks">Escolher meu Storybook</a><a href="#como">Descobrir como funciona</a></div>
          <ul className="trust"><li>PDF personalizado</li><li>Leitura sem rótulos</li><li>Entrega digital</li></ul>
        </div>
        <div className="fitTable" aria-label="Para quem este Storybook é indicado">
          <article className="fitYes">
            <span className="fitIcon" aria-hidden="true">✦</span>
            <h2>Este livro é para você se…</h2>
            <ul>
              <li>quer compreender seu bebê, sua criança ou seu adolescente de forma mais profunda;</li>
              <li>deseja reconhecer melhor seu temperamento, emoções, talentos e necessidades;</li>
              <li>prefere uma leitura leve, prática e sem excesso de termos astrológicos;</li>
              <li>valoriza uma leitura que poderá ser revisitada em diferentes fases do crescimento.</li>
            </ul>
          </article>
          <article className="fitNo">
            <span className="fitIcon" aria-hidden="true">☾</span>
            <h2>Este livro não é para você se…</h2>
            <ul>
              <li>procura previsões fechadas ou respostas definitivas sobre o futuro;</li>
              <li>espera um diagnóstico psicológico, médico ou comportamental;</li>
              <li>não tem acesso ao horário exato registrado no nascimento;</li>
              <li>quer um conteúdo genérico que poderia servir para qualquer pessoa.</li>
            </ul>
          </article>
        </div>
      </section>

      <div className="launch"><p><strong>Semana de lançamento</strong><span className="launchPromise">Receba seu Storybook em até 24 horas.</span></p><span>Vagas diárias limitadas</span></div>

      <section className="productDesire" aria-labelledby="product-desire-title">
        <img className="cosmicSymbol desirePlanet" src="/assets/decor/simb1-transparent.png" alt="" aria-hidden="true" />
        <img className="cosmicSymbol desireMoon" src="/assets/decor/simb6-transparent.png" alt="" aria-hidden="true" />
        <div className="productMockup">
          <span className="mockupSpark mockupSparkOne" aria-hidden="true">✦</span>
          <span className="mockupSpark mockupSparkTwo" aria-hidden="true">✦</span>
          <img
            src="/assets/media/mockup-livro-breno-transparent.png"
            alt="Representação de O Céu de Breno como um livro personalizado de capa dura"
          />
          <p>Representação artística · entrega em PDF digital</p>
        </div>
        <div className="productDesireCopy">
          <p className="eyebrow">Um livro que começa no instante do nascimento</p>
          <h2 id="product-desire-title">O <span className="titleSky">céu</span> do nascimento transformado em uma leitura única sobre seu filho.</h2>
          <p>Cada página combina a leitura do mapa natal com uma narrativa delicada, visual e fácil de compreender. É um retrato simbólico para acompanhar quem ele é — do bebê ao adolescente — sem rótulos ou previsões fechadas.</p>
          <div className="desireProof" aria-label="Características do Storybook">
            <span>Primeiro nome e nascimento personalizados</span>
            <span>Arte adequada à idade</span>
            <span>8 ou 16 páginas</span>
          </div>
          <a className="button action" href="#storybooks">Quero conhecer meu filho mais a fundo</a>
        </div>
      </section>

      <section className="section cosmicSteps" id="como">
        <img className="cosmicSymbol stepsPlanet" src="/assets/decor/simb2-transparent.png" alt="" aria-hidden="true" />
        <div className="sectionTitle"><p className="eyebrow">Do bebê ao adolescente. Único em cada fase.</p><h2>Do nascimento ao livro em três passos</h2></div>
        <div className="steps">
          <article><b>1</b><h3>Escolha o Storybook</h3><p>Selecione a versão de 8 ou 16 páginas conforme a profundidade que deseja.</p></article>
          <article><b>2</b><h3>Conte onde o <span className="titleSky">céu</span> começou</h3><p>Após o pagamento, informe apenas o primeiro nome, a data, o horário exato e a cidade de nascimento.</p></article>
          <article><b>3</b><h3>Receba uma memória única</h3><p>O livro é criado, revisado e enviado em PDF para o seu e-mail.</p></article>
        </div>
        <div className="sectionCta"><a className="button action" href="#storybooks">Quero criar esta leitura personalizada</a></div>
      </section>

      <section className="section meaning">
        <img className="cosmicSymbol meaningTelescope" src="/assets/decor/simb3-transparent.png" alt="" aria-hidden="true" />
        <div className="storybookPreview">
          <div className="laptop" aria-label="Mockup de laptop exibindo o Storybook O Céu de Breno">
            <div className="laptopScreen">
              <div className="camera" aria-hidden="true" />
              <div className="videoFrame">
                <video autoPlay muted loop playsInline controls controlsList="nodownload" preload="metadata" poster="/assets/media/ceu-de-breno-poster.jpg" aria-label="Prévia em rolagem do Storybook O Céu de Breno" onLoadedMetadata={(event) => { event.currentTarget.playbackRate = 0.55; }}>
                  <source src="/assets/media/ceu-de-breno-scroll.mp4" type="video/mp4" />
                </video>
                <span className="videoBadge">Exemplo real</span>
              </div>
            </div>
            <div className="laptopBase" aria-hidden="true"><span /></div>
          </div>
          <p><strong>O Céu de Breno</strong><span>Veja como o livro percorre personalidade, emoções, talentos e formas de acolher.</span></p>
        </div>
        <div><p className="eyebrow">Astrologia que aproxima</p><h2>Não é um manual sobre quem seu filho deve ser.</h2><p className="muted">É um convite para observar com mais delicadeza em qualquer fase do crescimento. O Storybook apresenta potenciais, necessidades emocionais e formas de acolhimento — do bebê ao adolescente — sem determinismo, linguagem pesada ou rótulos.</p>
          <div className="benefits"><div><strong>Afetivo</strong><span>para fortalecer vínculos</span></div><div><strong>Lúdico</strong><span>para tornar o simbólico acessível</span></div><div><strong>Único</strong><span>feito com os dados do nascimento</span></div><div><strong>Prático</strong><span>com percepções para o dia a dia</span></div></div>
          <a className="button action inlineCta" href="#storybooks">Ver os dois Storybooks</a>
        </div>
      </section>

      <section className="pricing" id="storybooks">
        <img className="cosmicSymbol pricingPlanet" src="/assets/decor/simb2-transparent.png" alt="" aria-hidden="true" />
        <div className="sectionTitle"><p className="eyebrow">Escolha a profundidade da viagem</p><h2>Dois Storybooks. O mesmo <span className="titleSky">céu</span> inesquecível.</h2><p>O Completo tem o dobro de páginas e aprofunda a leitura para a família.</p></div>
        <div className="priceGrid">
          <article className="priceCard"><p className="label">Retrato essencial</p><h3>Storybook Resumido</h3><p>8 páginas</p><strong className="price">R$ 69,90</strong><small>pagamento único</small><ul><li>Principais forças da personalidade</li><li>Universo emocional do seu filho</li><li>Talentos e formas de expressão</li><li>Orientações leves para a família</li><li>PDF digital personalizado</li></ul><button className="button secondary" onClick={() => choose("resumido")}>Quero o Resumido</button></article>
          <article className="priceCard featured"><span className="popular">Mais completo</span><p className="label">Guia para acompanhar o crescimento</p><h3>Storybook Completo</h3><p>16 páginas</p><strong className="price">R$ 129,90</strong><small>pagamento único</small><ul><li>Tudo o que está no Storybook Resumido</li><li>Comunicação, aprendizado e curiosidade</li><li>Afetos, vínculos e formas de amar</li><li>Energia, iniciativa e desafios</li><li>Mapa astral e síntese prática</li><li>Visual adaptado para bebê, criança ou adolescente</li></ul><button className="button action" onClick={() => choose("completo")}>Quero o Completo</button></article>
        </div>
        <div className="purchaseNotices" aria-label="Informações importantes antes da compra">
          <article className="noticeCritical">
            <span className="noticeIcon" aria-hidden="true">!</span>
            <div><h3>A hora exata de nascimento é indispensável</h3><p>Confirme o horário registrado na certidão de nascimento ou na Declaração de Nascido Vivo. <strong>Se você não souber essa informação com segurança, não finalize a compra.</strong> Horários aproximados podem alterar o mapa e comprometer a leitura.</p></div>
          </article>
          <article>
            <span className="noticeIcon" aria-hidden="true">✦</span>
            <div><h3>Cada Storybook possui uma arte única</h3><p>As imagens desta página são ilustrativas. Personagens, elementos celestes, enquadramentos e composições poderão variar, mas serão sempre preservados o <strong>estilo aquarelado</strong>, a <strong>atmosfera celestial</strong> e a <strong>paleta de cores da opção escolhida</strong>.</p></div>
          </article>
        </div>
      </section>

      <section className="section testimonials" aria-labelledby="testimonials-title">
        <img className="cosmicSymbol testimonialsStar" src="/assets/decor/simb4-transparent.png" alt="" aria-hidden="true" />
        <div className="sectionTitle">
          <p className="eyebrow">Muito além de uma lembrança bonita</p>
          <h2 id="testimonials-title">O que este livro pode transformar</h2>
          <p>Um novo jeito de observar e compreender seu filho, seja ele bebê, criança ou adolescente.</p>
        </div>
        <div className="testimonialGrid">
          <article className="transformationCard">
            <span aria-hidden="true">✦</span>
            <h3>Mais clareza para compreender seu filho</h3>
            <p>Reconheça características, necessidades emocionais e formas particulares de expressão em qualquer fase do crescimento.</p>
          </article>
          <article className="transformationCard">
            <span aria-hidden="true">☾</span>
            <h3>Um novo olhar sobre comportamentos desafiadores</h3>
            <p>Descubra o que pode existir por trás de determinadas reações, respeitando a individualidade do bebê, da criança ou do adolescente sem encaixá-lo em padrões.</p>
          </article>
          <article className="transformationCard">
            <span aria-hidden="true">★</span>
            <h3>Um retrato para revisitar ao longo da vida</h3>
            <p>Um livro personalizado que registra, de forma leve e acolhedora, o <span className="titleSky">céu</span> do nascimento e ganha novos sentidos conforme seu filho cresce.</p>
          </article>
        </div>
      </section>

      <section className="section order" id="pedido">
        <img className="cosmicSymbol orderMoon" src="/assets/decor/simb6-transparent.png" alt="" aria-hidden="true" />
        <div className="orderIntro"><p className="eyebrow">Depois da compra</p><h2 className="orderTitle"><span>Seus dados ficam</span><span>para o próximo passo</span></h2><p className="muted">Você escolhe e paga o Storybook primeiro. Somente após a confirmação do pagamento receberá o acesso ao formulário seguro.</p><div className="selected"><span>Storybook escolhido</span><strong>{plans[plan].name}</strong><p>{plans[plan].pages} · {plans[plan].price}</p></div></div>
        <div className="afterPurchase">
          <p className="eyebrow">Após a confirmação do pagamento</p>
          <h3>Você receberá o formulário para iniciar a produção</h3>
          <p>O formulário solicitará apenas os dados indispensáveis para criar e entregar o Storybook:</p>
          <ul>
            <li><strong>primeiro nome</strong> do bebê, da criança ou do adolescente — nunca o nome completo;</li>
            <li>data de nascimento;</li>
            <li>hora exata registrada;</li>
            <li>cidade, estado ou província e país de nascimento;</li>
            <li>faixa etária e escolha da arte infantil ou adolescente;</li>
            <li>e-mail da pessoa responsável pela compra.</li>
          </ul>
          <div className="privacyMini"><strong>Privacidade desde o início</strong><p>Coletamos somente o necessário. O primeiro nome é suficiente para personalizar o livro; o nome completo da criança ou do adolescente não será solicitado.</p></div>
          <p className="deadlineNote">O prazo de produção começa após o pagamento aprovado e o envio completo e correto do formulário.</p>
          <button className="button action submit" type="button">Ir para o pagamento do {plans[plan].name.replace("Storybook ", "")}</button>
          <small className="checkoutPending">O checkout será conectado na próxima etapa.</small>
        </div>
      </section>

      <section className="section faq"><img className="cosmicSymbol faqStar" src="/assets/decor/simb4-transparent.png" alt="" aria-hidden="true" /><div className="sectionTitle"><p className="eyebrow">Dúvidas antes da viagem</p><h2>Perguntas frequentes</h2></div><div className="faqList">
        <details><summary>Preciso entender de astrologia?</summary><p>Não. O texto é feito para famílias leigas, com linguagem leve e sem excesso de termos técnicos.</p></details>
        <details><summary>Posso comprar para um bebê, uma criança ou um adolescente?</summary><p>Sim. A leitura parte do nascimento e pode ser criada e revisitada em qualquer fase do crescimento.</p></details>
        <details><summary>Posso comprar para alguém nascido fora do Brasil?</summary><p>Sim. Informe o horário local, cidade, estado ou província e país do nascimento.</p></details>
        <details><summary>E se eu não souber o horário exato?</summary><p>O horário é indispensável nesta primeira versão. Consulte a certidão antes de comprar.</p></details>
        <details><summary>Preciso informar o nome completo?</summary><p>Não. Solicitamos somente o primeiro nome do bebê, da criança ou do adolescente. O nome completo não é necessário para a leitura e não será solicitado.</p></details>
        <details><summary>As artes serão idênticas às imagens da página?</summary><p>Não necessariamente. Cada Storybook tem composição própria, mas sempre mantém o estilo aquarelado, a atmosfera celestial e a paleta de cores da opção escolhida.</p></details>
        <details><summary>Como receberei o Storybook?</summary><p>Você receberá um arquivo PDF no e-mail informado no pedido.</p></details>
        <details><summary>O prazo de 24 horas vale sempre?</summary><p>Não. É exclusivo da primeira semana de lançamento e sujeito ao limite diário.</p></details>
      </div></section>

      <footer><img src="/assets/brand/logo-original.png" alt="Meu Primeiro Céu"/><p>Um roteiro simbólico para reconhecer o universo astrológico do seu filho, do bebê ao adolescente.</p><a href="mailto:meuprimeiroceu@gmail.com">meuprimeiroceu@gmail.com</a><small>© 2026 Meu Primeiro <span className="titleSky">Céu</span>.</small></footer>
    </main>
  );
}
