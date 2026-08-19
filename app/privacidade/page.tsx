import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade e LGPD | Meu Primeiro Céu",
  description: "Saiba como o Meu Primeiro Céu coleta, utiliza, protege e elimina dados pessoais.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <main className="privacyPage">
      <header className="privacyHeader">
        <a href="/" aria-label="Voltar para Meu Primeiro Céu"><img src="/assets/brand/logo-horizontal.png" alt="Meu Primeiro Céu" /></a>
        <a className="privacyBack" href="/">← Voltar à página de vendas</a>
      </header>
      <article className="privacyContent">
        <p className="eyebrow">Privacidade desde o início</p>
        <h1>Política de Privacidade e LGPD</h1>
        <p className="privacyUpdated">Última atualização: 19 de agosto de 2026.</p>
        <p>Esta política explica, de forma clara, como os dados pessoais são tratados para vender, produzir e entregar o Storybook personalizado Meu Primeiro Céu.</p>

        <section><h2>1. Quem é responsável pelos dados</h2><p>A controladora dos dados é <strong>AS Marketing e Eventos LTDA</strong>, CNPJ 63.488.927/0001-32, com endereço fiscal na Rua do Parque, 361, Jardim Atlântico, Goiânia — GO. O canal para dúvidas e solicitações relacionadas à privacidade é <a href="mailto:omeuceuinterior@gmail.com">omeuceuinterior@gmail.com</a>.</p></section>

        <section><h2>2. Quais dados utilizamos</h2><ul><li>dados da pessoa compradora, como nome, e-mail, telefone, CPF e dados de cobrança solicitados no checkout;</li><li>para a personalização: primeiro nome da criança, data, hora e local de nascimento, faixa etária e opção de arte;</li><li>dados técnicos e de atribuição, como parâmetros UTM e identificadores de clique, quando presentes no link de acesso;</li><li>mensagens enviadas ao atendimento.</li></ul><p>Os dados do cartão e a liquidação do pagamento são processados pela Kiwify e pelos respectivos meios de pagamento. O Meu Primeiro Céu não recebe nem armazena o número completo do cartão.</p></section>

        <section><h2>3. Para que os dados são usados</h2><ul><li>processar a compra e confirmar o pagamento;</li><li>calcular o mapa, criar, revisar e entregar o Storybook solicitado;</li><li>prestar atendimento e corrigir eventuais erros de produção;</li><li>cumprir obrigações legais, fiscais e de segurança;</li><li>medir, de forma proporcional, a origem das visitas e a eficiência da página.</li></ul></section>

        <section><h2>4. Dados de crianças e adolescentes</h2><p>O tratamento é realizado para produzir o produto solicitado, sempre buscando o melhor interesse da criança ou do adolescente. Solicitamos apenas dados necessários e nunca pedimos o nome completo da criança.</p><p>A pessoa que envia os dados declara ser pai, mãe, responsável legal ou estar autorizada pelo responsável. Quando o consentimento for a base legal aplicável, ele deverá ser específico e destacado, dado por ao menos um dos pais ou pelo responsável legal.</p></section>

        <section><h2>5. Bases legais</h2><p>Conforme a finalidade, o tratamento poderá ocorrer para executar o contrato e procedimentos relacionados à compra, cumprir obrigações legais ou regulatórias, exercer direitos, prevenir fraudes e atender interesses legítimos proporcionais de segurança e suporte. O consentimento será usado quando for a base adequada e poderá ser revogado, sem afetar tratamentos anteriores válidos.</p></section>

        <section><h2>6. Com quem os dados podem ser compartilhados</h2><p>Somente quando necessário, os dados podem ser tratados por fornecedores de checkout e pagamento, e-mail, hospedagem, armazenamento, atendimento e serviços técnicos usados para produzir e entregar o Storybook. Esses fornecedores devem tratar os dados para a finalidade contratada e de acordo com a legislação aplicável.</p></section>

        <section><h2>7. Por quanto tempo guardamos</h2><p>Os dados são mantidos somente pelo período necessário para concluir a produção, entregar o arquivo, prestar suporte e cumprir obrigações legais. Depois disso, são eliminados ou anonimizados, salvo quando a conservação for permitida ou exigida por lei. Você pode solicitar a eliminação dos dados de personalização após a entrega, ressalvadas as hipóteses legais de retenção.</p></section>

        <section><h2>8. Seus direitos</h2><p>A pessoa titular ou seu representante pode solicitar confirmação e acesso, correção, informação sobre compartilhamento, anonimização, bloqueio ou eliminação de dados desnecessários ou irregulares, portabilidade quando aplicável, oposição e revogação do consentimento. Para exercer esses direitos, escreva para <a href="mailto:omeuceuinterior@gmail.com">omeuceuinterior@gmail.com</a>. Poderemos pedir informações suficientes para confirmar a identidade e a legitimidade da solicitação.</p></section>

        <section><h2>9. Segurança e incidentes</h2><p>Adotamos medidas administrativas e técnicas compatíveis com o porte da operação e com a natureza dos dados. Nenhum sistema é totalmente infalível; se ocorrer incidente relevante, serão adotadas as providências previstas na legislação e nas orientações da Autoridade Nacional de Proteção de Dados.</p></section>

        <section><h2>10. Cookies, métricas e links externos</h2><p>A página pode registrar parâmetros de campanha e eventos de navegação para medir a origem das visitas e os cliques de compra. Ferramentas de análise ou publicidade somente serão ativadas quando configuradas. Ao abrir o checkout, passam a valer também as políticas do provedor de pagamento.</p></section>

        <section><h2>11. Alterações desta política</h2><p>Esta política pode ser atualizada para refletir mudanças no serviço ou na legislação. A data da versão mais recente estará sempre indicada no início do documento.</p></section>
      </article>
    </main>
  );
}
