"use client";

import { FormEvent, useState } from "react";

const plans = {
  resumido: { name: "Storybook Resumido", pages: "8 páginas", price: "R$ 69,90" },
  completo: { name: "Storybook Completo", pages: "16 páginas", price: "R$ 129,90" },
} as const;
type Plan = keyof typeof plans;

export default function Home() {
  const [plan, setPlan] = useState<Plan>("completo");
  const [review, setReview] = useState(false);

  const choose = (value: Plan) => {
    setPlan(value);
    setReview(false);
    document.getElementById("pedido")?.scrollIntoView({ behavior: "smooth" });
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReview(true);
  };

  return (
    <main>
      <header className="header">
        <a className="brand" href="#inicio" aria-label="Meu Primeiro Céu — início">
          <picture>
            <source media="(max-width:560px)" srcSet="/assets/brand/logo-square.png" />
            <img src="/assets/brand/logo-horizontal.png" alt="Meu Primeiro Céu — O livro do céu da criança" />
          </picture>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#como">Como funciona</a><a href="#storybooks">Storybooks</a>
          <a className="navCta" href="#pedido">Criar o livro</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="heroCopy">
          <p className="eyebrow">Um presente para guardar por toda a vida</p>
          <h1>Antes mesmo de conhecer o mundo, sua criança já tinha um céu só dela.</h1>
          <p className="lead">Transformamos o mapa astral do nascimento em um storybook personalizado, leve e lúdico — uma viagem em aquarela pelo universo particular da criança.</p>
          <div className="actions"><a className="button action" href="#storybooks">Escolher meu Storybook</a><a href="#como">Descobrir como funciona</a></div>
          <ul className="trust"><li>PDF personalizado</li><li>Leitura sem rótulos</li><li>Entrega digital</li></ul>
        </div>
        <div className="heroArt" aria-label="Prévia artística do Storybook">
          <div className="book">
            <div className="page cover"><img src="/assets/brand/logo-square.png" alt="" /><p>O céu de chegada de</p><strong>uma criança única</strong></div>
            <div className="page inside"><small>Uma viagem pelo céu</small><h2>Pequenas estrelas, grandes descobertas</h2><div className="planet"><span /></div><p>Um roteiro simbólico para compreender jeitos, afetos e potenciais.</p></div>
          </div>
          <p className="caption">Cada página nasce do céu exato do nascimento.</p>
        </div>
      </section>

      <div className="launch"><p><strong>Semana de lançamento:</strong> receba seu Storybook em até 24 horas.</p><span>Vagas diárias limitadas</span></div>

      <section className="section" id="como">
        <div className="sectionTitle"><p className="eyebrow">Simples para a família. Único para a criança.</p><h2>Do nascimento ao livro em três passos</h2></div>
        <div className="steps">
          <article><b>1</b><h3>Escolha o Storybook</h3><p>Selecione a versão de 8 ou 16 páginas conforme a profundidade que deseja.</p></article>
          <article><b>2</b><h3>Conte onde o céu começou</h3><p>Informe nome, data, horário exato e cidade de nascimento da criança.</p></article>
          <article><b>3</b><h3>Receba uma memória única</h3><p>O livro é criado, revisado e enviado em PDF para o seu e-mail.</p></article>
        </div>
      </section>

      <section className="section meaning">
        <div className="cosmic" aria-hidden="true"><span className="moon"/><span className="softPlanet"/><p>Um céu que vira história.</p></div>
        <div><p className="eyebrow">Astrologia que aproxima</p><h2>Não é um manual sobre quem a criança deve ser.</h2><p className="muted">É um convite para observar com mais delicadeza. O Storybook apresenta potenciais, necessidades emocionais e formas de acolhimento em uma narrativa fácil de compreender — sem determinismo, sem linguagem pesada e sem rótulos.</p>
          <div className="benefits"><div><strong>Afetivo</strong><span>para fortalecer vínculos</span></div><div><strong>Lúdico</strong><span>para tornar o simbólico acessível</span></div><div><strong>Único</strong><span>feito com os dados do nascimento</span></div><div><strong>Prático</strong><span>com percepções para o dia a dia</span></div></div>
        </div>
      </section>

      <section className="pricing" id="storybooks">
        <div className="sectionTitle"><p className="eyebrow">Escolha a profundidade da viagem</p><h2>Dois Storybooks. O mesmo céu inesquecível.</h2><p>O Completo tem o dobro de páginas e aprofunda a leitura para a família.</p></div>
        <div className="priceGrid">
          <article className="priceCard"><p className="label">Retrato essencial</p><h3>Storybook Resumido</h3><p>8 páginas</p><strong className="price">R$ 69,90</strong><small>pagamento único</small><ul><li>Principais forças da personalidade</li><li>Universo emocional da criança</li><li>Talentos e formas de expressão</li><li>Orientações leves para a família</li><li>PDF digital personalizado</li></ul><button className="button secondary" onClick={() => choose("resumido")}>Quero o Resumido</button></article>
          <article className="priceCard featured"><span className="popular">Mais completo</span><p className="label">Guia para acompanhar o crescimento</p><h3>Storybook Completo</h3><p>16 páginas</p><strong className="price">R$ 129,90</strong><small>pagamento único</small><ul><li>Tudo o que está no Storybook Resumido</li><li>Comunicação, aprendizado e curiosidade</li><li>Afetos, vínculos e formas de amar</li><li>Energia, iniciativa e desafios</li><li>Mapa astral e síntese prática</li></ul><button className="button action" onClick={() => choose("completo")}>Quero o Completo</button></article>
        </div>
      </section>

      <section className="section order" id="pedido">
        <div className="orderIntro"><p className="eyebrow">Comece a criar</p><h2>Conte onde essa história começou</h2><p className="muted">Informe o horário local registrado no nascimento. Você não precisa calcular fuso ou horário de verão.</p><div className="selected"><span>Storybook escolhido</span><strong>{plans[plan].name}</strong><p>{plans[plan].pages} · {plans[plan].price}</p></div></div>
        <form onSubmit={submit}>
          <fieldset className="picker"><legend>1. Escolha a versão</legend>{(Object.keys(plans) as Plan[]).map(key => <label key={key} className={plan===key?"picked":""}><input type="radio" name="plano" checked={plan===key} onChange={()=>setPlan(key)}/><span><strong>{plans[key].name}</strong><small>{plans[key].pages} · {plans[key].price}</small></span></label>)}</fieldset>
          <fieldset><legend>2. Dados para o Storybook</legend><div className="fields"><label><span>Nome da criança</span><input name="childName" required /></label><label><span>Data de nascimento</span><input type="date" required /></label><label><span>Horário exato</span><input type="time" required /></label><label><span>Cidade de nascimento</span><input name="city" required /></label><label><span>Estado / Província</span><input name="region" /></label><label><span>País</span><input name="country" required /></label><label className="full"><span>Seu nome</span><input name="buyer" autoComplete="name" required /></label><label className="full"><span>E-mail para receber o livro</span><input type="email" autoComplete="email" required /></label></div></fieldset>
          <label className="check"><input type="checkbox" required/><span>Conferi os dados de nascimento e entendo que eles serão usados para criar o livro personalizado.</span></label>
          <button className="button action submit" type="submit">Revisar dados e continuar</button><p className="note">Nenhum pagamento é realizado nesta tela de demonstração.</p>
          {review && <div className="review" role="status"><strong>Estrutura do pedido pronta.</strong><p>O próximo passo será conectar o pagamento e salvar o pedido com segurança.</p></div>}
        </form>
      </section>

      <section className="section faq"><div className="sectionTitle"><p className="eyebrow">Dúvidas antes da viagem</p><h2>Perguntas frequentes</h2></div><div className="faqList">
        <details><summary>Preciso entender de astrologia?</summary><p>Não. O texto é feito para famílias leigas, com linguagem leve e sem excesso de termos técnicos.</p></details>
        <details><summary>Posso comprar para uma criança nascida fora do Brasil?</summary><p>Sim. Informe o horário local, cidade, estado ou província e país do nascimento.</p></details>
        <details><summary>E se eu não souber o horário exato?</summary><p>O horário é indispensável nesta primeira versão. Consulte a certidão antes de comprar.</p></details>
        <details><summary>Como receberei o Storybook?</summary><p>Você receberá um arquivo PDF no e-mail informado no pedido.</p></details>
        <details><summary>O prazo de 24 horas vale sempre?</summary><p>Não. É exclusivo da primeira semana de lançamento e sujeito ao limite diário.</p></details>
      </div></section>

      <footer><img src="/assets/brand/logo-horizontal.png" alt="Meu Primeiro Céu"/><p>Um roteiro simbólico para reconhecer o universo particular de cada criança.</p><a href="mailto:meuprimeiroceu@gmail.com">meuprimeiroceu@gmail.com</a><small>© 2026 Meu Primeiro Céu.</small></footer>
    </main>
  );
}
