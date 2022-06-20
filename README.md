<h1 align="center"> GitPoint </h1> <br>
<p align="center">
  <a href="https://gitpoint.co/">
    <img alt="GitPoint" title="GitPoint" src="http://i.imgur.com/VShxJHs.png" width="450">
  </a>
</p>

<p align="center">
  GitHub no seu bolso. Construído com React Native.
</p>

<p align="center">
  <a href="https://itunes.apple.com/us/app/gitpoint/id1251245162?mt=8">
    <img alt="Baixe na App Store" title="App Store" src="http://i.imgur.com/0n2zqHD.png" width="140">
  </a>

  <a href="https://play.google.com/store/apps/details?id=com.gitpoint">
    <img alt="Obter no Google Play" title="Google Play" src="http://i.imgur.com/mtGRPuM.png" width="140">
  </a>
</p>

<!-- START DOC gerado TOC, por favor, mantenha o comentário aqui para permitir a atualização automática -->
<!-- NÃO EDITE ESTA SEÇÃO, EM VEZ RE-EXECUTAR DOCTOC PARA ATUALIZAR -->
## Índice

- [Introdução](#introdução)
- [Recursos](#recursos)
- [Comentários](#feedback)
- [Contribuintes](#contribuidores)
- [Processo de compilação](#build-process)
- [Apoiadores](#apoiadores-)
- [Patrocinadores](#patrocinadores-)
- [Agradecimentos](#agradecimentos)

<!-- END docdoc gerado TOC, por favor, mantenha o comentário aqui para permitir a atualização automática -->

## Introdução

[![Status da compilação](https://img.shields.io/travis/gitpoint/git-point.svg?style=flat-square)](https://travis-ci.org/gitpoint/git-point )
[![Coveralls](https://img.shields.io/coveralls/github/gitpoint/git-point.svg?style=flat-square)](https://coveralls.io/github/gitpoint/git- ponto)
[![Todos os contribuidores](https://img.shields.io/badge/all_contributors-73-orange.svg?style=flat-square)](./CONTRIBUTORS.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![Gitter chat](https://img.shields.io/badge/chat-on_gitter-008080.svg?style=flat-square)](https://gitter.im/git-point)

Visualize as informações do repositório e do usuário, controle suas notificações e até mesmo gerencie seus problemas e solicitações de pull. Construído com React Native, o GitPoint é um dos clientes não oficiais do GitHub mais ricos em recursos, 100% gratuito.

**Disponível para iOS e Android.**

<p align="center">
  <img src = "http://i.imgur.com/HowF6aM.png" largura=350>
</p>

## Características

Algumas das coisas que você pode fazer com o GitPoint:

* Veja o feed de atividades do usuário
* Comunique-se sobre seu problema e puxe conversas de solicitação
* Fechar ou bloquear problemas
* Aplicar rótulos e responsáveis
* Revisar e mesclar solicitações de pull
* Criar novos problemas
* Repositórios Star, Watch e Fork
* Controle suas notificações não lidas e participantes
* Pesquise facilmente por qualquer usuário ou repositório

<p align="center">
  <img src = "http://i.imgur.com/IkSnFRL.png" largura=700>
</p>

<p align="center">
  <img src = "http://i.imgur.com/0iorG20.png" largura=700>
</p>

## Comentários

Sinta-se à vontade para nos enviar comentários no [Twitter](https://twitter.com/gitpointapp) ou [registrar um problema](https://github.com/gitpoint/git-point/issues/new). Solicitações de recursos são sempre bem-vindas. Se você deseja contribuir, dê uma olhada rápida nas [diretrizes](./CONTRIBUTING.md)!

Se houver algo sobre o qual você gostaria de conversar, sinta-se à vontade para participar do nosso [chat Gitter](https://gitter.im/git-point)!

## Contribuintes

Este projeto segue a especificação [all-contributors](https://github.com/kentcdodds/all-contributors) e é trazido a você por esses [contribuidores incríveis](./CONTRIBUTORS.md).

## Processo de construção

- Siga o [React Native Guide](https://facebook.github.io/react-native/docs/getting-started.html) para começar a construir um projeto com código nativo. **É necessário um Mac se você deseja desenvolver para iOS.**
- Clone ou baixe o repositório
- `yarn` para instalar dependências
- `yarn run link` para vincular dependências nativas de reação
- `yarn start:ios` para iniciar o empacotador e executar o aplicativo no simulador iOS (`yarn start:ios:logger` inicializará o aplicativo com [redux-logger](<https://github.com/evgenyrodionov/ redux-logger>))
- `yarn start:android` para iniciar o empacotador e executar o aplicativo no dispositivo/emulador Android (`yarn start:android:logger` inicializará o aplicativo com [redux-logger](https://github.com/ evgenyrodionov/redux-logger))

Consulte as [diretrizes de contribuição](./CONTRIBUTING.md) para obter um processo detalhado sobre como criar seu aplicativo, bem como informações sobre solução de problemas.

**Chaves de desenvolvimento**: O `CLIENT_ID` e o `CLIENT_SECRET` em `api/index.js` são para fins de desenvolvimento e não representam as chaves reais do aplicativo. Sinta-se à vontade para usá-los ou usar um novo conjunto de chaves criando um [aplicativo OAuth](https://github.com/settings/applications/new) próprio. Defina o "URL de retorno de chamada de autorização" para `gitpoint://welcome`.

## Apoiadores [![Apoiadores no Open Collective](https://opencollective.com/git-point/backers/badge.svg)](#backers)

Obrigado a todos os nossos apoiadores! 🙏 [[Torne-se um apoiador](https://opencollective.com/git-point#backer)]

<a href="https://opencollective.com/gi
