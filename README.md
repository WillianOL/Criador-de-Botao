<div> 
  <h1 align="center">Estilizador de Botões CSS - Projeto JS👨‍💻</h1> 
</div>

<div>
  <h3 align="center">Aplicação que estiliza botões em tempo real.</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/Criador-de-Botao/assets/112639055/0980282c-d502-4595-8a09-e7578882bd50" width='850px'>
</div>


## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias: </p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>

</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>
	
<div>
	<p>Esse projeto foi feito em uma das aulas da plataforma <a href="https://www.origamid.com/">Origamid</a>. Porém com pequenas alterações.</p>
	<p>A aplicação consiste em uma sidebar com opções de estilização CSS que se aplicam ao botão a direita. Enquanto o usuário vai escolhendo os estilos, o botão vai alterando em tempo real. E ao mesmo tempo, os estilos que foram aplicados ao botão serão mostrados ao usuário no painel do CSS, em forma de código. Servindo como um facilidador de estilos CSS.</p>
 <p>Nesse projeto, foram usados:</p>
 <ul>
  <li><strong>localStorage</strong> - armazena os estilos que o usuário colocou na maquina.</li>
  <li><strong>objetos com métodos</strong> - funções em objetos que aplicam os estilos ao botão.</li>
  <li><strong>Interação entre o HTML e JavaScript</strong> - Names dos inputs são pegos com JavaScript para manipulação dos estilos.</li>
 </ul>
</div>

### Acessar projeto: ✈

◻<a href="https://willianol.github.io/Criador-de-Botao/assets/index.html">Estilizador de botões CSS.</a>


## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

### Variáveis importantes

<div>
	<p>Primeiro, para a criação da aplicação foram definidas variáveis que seram importantes para sua construção. São elas:</p>
	<ul>
		<li><strong>conteinerInputs</strong> - conteiner da sidebar onde ficam os inputs.</li>
		<li><strong>cssText</strong> - conteiner onde ficaram os códigos CSS.</li>
		<li><strong>botao</strong> - botão que será aplicado os estilos.</li>
	</ul>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/6d97c4ec-8d5e-4b01-ad46-d518a18536d6" width="700px">
</div>

&nbsp;
&nbsp;


### Lógica para a aplicação dos estilos
<div>
	<p>No HTML, todos os inputs da sidebar possuem os names de acordo com o modo de aplicação de estilos CSS com JavaScript. Por exemplo, o input de color possui o name "backgroundColor" pois é assim que se modifica uma propriedade CSS com JavaScript. A partir disso, no JavaScript são pegos os names dos inputs na função <strong>pegarEstilos</strong>.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/05cde239-4f42-48b2-896a-79bb9545a5d7" width="700px">
</div>

### Pegar e aplicar os estilos CSS

<div>
	<p>Para pegar os valores dos inputs e os names, no <strong>conteinerInputs</strong> foi criada uma função com evento de input chamada <strong>pegarEstilos</strong>. Nela, primeiramente foram criadas duas constantes: <strong>nomeEvento</strong> que pega o name de cada input, e <strong>valor</strong> que pega os values dos inputs.</p>
	<p>Posteriormente, no objeto <strong>handleStyle</strong> é acessado o método usando o [nomeEvento] e executando o método passando como argumento o (valor).</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/0eeb1793-9a9a-4c6b-808f-5ce3f52bf5fd" width="700px">
</div>

&nbsp;

<div>
	<p>No objeto <strong>handleStyle</strong> foi definida uma propriedade chamada <strong>element</strong> que armazena a constante <strong>botao</strong>(botão que vai ser personalizado). Depois, para cada tipo de estilização CSS, foi criado um método diferente no objeto.</p>
	<p>Funcionando dessa forma, por exemplo: Quando o usuário modificar o input da altura do botão, vai ativar a função "pegarEstilos". Na função, vai pegar o name do input, que no caso é height, e o valor escolhido da altura pelo usuário. Esses valores são passados no handleStyle, acessando o método height e executando com o valor. Em cada método, o this.element(botão) é modificado através do objeto style com o que vai ser modificado.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/6d726e87-9a18-4144-ba8e-801bf6ac4e3a" width="700px">
</div>

### Salvar alterações e aplicar alterações salvas

<div>
	<p>Para salvar as estilizações feitas, na função <strong>pegarEstilos</strong> é executada a função <strong>saveValues</strong>, passando como argumentos o <strong>nomeEvento e valor.</strong></p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/c48af29f-c370-4b00-9770-3e84f2ee9ddf" width="700px">
</div>

&nbsp;

<div>
	<p>Na função, usando o <strong>localStorage</strong>, são armazenadas as estilizações utilizando os parâmetros passados. Passando a chave usando o <strong>[nome]</strong> e a chave recebendo o <strong>valor</strong> dela. Assim, salvando as estilizações.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/5c614c4b-41af-4ee9-a201-18e99d130a55" width="700px">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/ef225b5b-aa14-4e6e-b893-79b534bb3a52" width="700px">
</div>

&nbsp;

<div>
	<p>Para aplicar as alterações já salvas no localStorage, foi criada uma função chamada <strong>setValues</strong>. Nela, é declarada a constante <strong>properts</strong> que armazena as chaves do localStorage que estão salvas, <strong>isso feito com o Object nativo com o método keys(). Armazenando em forma de array.</strong></p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/3c62ffa1-5730-42cc-b7aa-080da33a497f" width="700px">
</div>

&nbsp;

<div>
	<p>Como o que é armazenado é um array, foi usado o método forEach com uma função callback para cada item da array, com o parâmetro propertie. Dentro dela, temos o objeto handleStyle sendo acessado com o [propertie](acessando o método correspondente a chave do localStorage) e executando com o (localStorag[propertie]) como argumento. Sendo esses os valores das chaves.</p>
	<p>Depois, é pego no conteinerInputs seus elementos acessados com o [propertie] e definindo seu value com o localStorage[propertie] (valores das chaves).</p>
	<p>Fazendo assim, as modificações feitas e salvas no localStorage serem aplicadas novamente, caso a página seja fechada ou outros problemas.</p>
</div>

<div align="center">
	<img align="center" src="https://github.com/WillianOL/Criador-de-Botao/assets/112639055/b7cd9770-318b-4334-9a7e-2018aa8dcc53" width="700px">
</div>












