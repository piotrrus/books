'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">Books app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-8338dcfe19d4c5a881c9035df34fd956"' : 'data-target="#xs-components-links-module-AppModule-8338dcfe19d4c5a881c9035df34fd956"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-8338dcfe19d4c5a881c9035df34fd956"' :
                                            'id="xs-components-links-module-AppModule-8338dcfe19d4c5a881c9035df34fd956"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorDetailsPageModule.html" data-type="entity-link">AuthorDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' : 'data-target="#xs-components-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' :
                                            'id="xs-components-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' }>
                                            <li class="link">
                                                <a href="components/AuthorDetailsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorDetailsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' : 'data-target="#xs-injectables-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' :
                                        'id="xs-injectables-links-module-AuthorDetailsPageModule-46d6fdeaded4b0dccb4772362baaa4cc"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthorsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthorsPageModule.html" data-type="entity-link">AuthorsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' : 'data-target="#xs-components-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' :
                                            'id="xs-components-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' }>
                                            <li class="link">
                                                <a href="components/AuthorsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorsPageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AuthorsTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorsTableComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' : 'data-target="#xs-injectables-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' :
                                        'id="xs-injectables-links-module-AuthorsPageModule-2bfb51ce9db978fef54f2cc83cf29ce0"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthorsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookDetailsPageModule.html" data-type="entity-link">BookDetailsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' : 'data-target="#xs-components-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' :
                                            'id="xs-components-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' }>
                                            <li class="link">
                                                <a href="components/BookDetailsPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookDetailsPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' : 'data-target="#xs-injectables-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' :
                                        'id="xs-injectables-links-module-BookDetailsPageModule-81a8456937839b887f1b49c5d6db4641"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksPageModule.html" data-type="entity-link">BooksPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' : 'data-target="#xs-components-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' :
                                            'id="xs-components-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' }>
                                            <li class="link">
                                                <a href="components/BooksPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BooksPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' : 'data-target="#xs-injectables-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' :
                                        'id="xs-injectables-links-module-BooksPageModule-369ab24457c27aba1ae6b274f32ea745"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BootstrapModule.html" data-type="entity-link">BootstrapModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/GenresPageModule.html" data-type="entity-link">GenresPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' : 'data-target="#xs-components-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' :
                                            'id="xs-components-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' }>
                                            <li class="link">
                                                <a href="components/GenresPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GenresPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' : 'data-target="#xs-injectables-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' :
                                        'id="xs-injectables-links-module-GenresPageModule-5f5d446cd0c8a56e3324a215e14fcda8"' }>
                                        <li class="link">
                                            <a href="injectables/BookGenresService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BookGenresService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomePageModule.html" data-type="entity-link">HomePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' : 'data-target="#xs-components-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' :
                                            'id="xs-components-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' }>
                                            <li class="link">
                                                <a href="components/BookCardComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookCardComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomePageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomePageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' : 'data-target="#xs-injectables-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' :
                                        'id="xs-injectables-links-module-HomePageModule-a38e04495628a80f5a4ca2af83bea3c7"' }>
                                        <li class="link">
                                            <a href="injectables/AuthorsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AuthorsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BookGenresService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BookGenresService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BooksService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BooksService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PublishersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PublishersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialModule.html" data-type="entity-link">MaterialModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link">ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-9244680cc2c6f54ac51445072e825f51"' : 'data-target="#xs-components-links-module-ModalModule-9244680cc2c6f54ac51445072e825f51"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-9244680cc2c6f54ac51445072e825f51"' :
                                            'id="xs-components-links-module-ModalModule-9244680cc2c6f54ac51445072e825f51"' }>
                                            <li class="link">
                                                <a href="components/AuthorFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenreFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GenreFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublishersFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublishersFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NavigationModule.html" data-type="entity-link">NavigationModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-NavigationModule-3a6c32be29677f6ba6d2667c7e972d5a"' : 'data-target="#xs-components-links-module-NavigationModule-3a6c32be29677f6ba6d2667c7e972d5a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NavigationModule-3a6c32be29677f6ba6d2667c7e972d5a"' :
                                            'id="xs-components-links-module-NavigationModule-3a6c32be29677f6ba6d2667c7e972d5a"' }>
                                            <li class="link">
                                                <a href="components/NavigationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavigationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PublishersPageModule.html" data-type="entity-link">PublishersPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' : 'data-target="#xs-components-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' :
                                            'id="xs-components-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' }>
                                            <li class="link">
                                                <a href="components/PublishersPageComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublishersPageComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' : 'data-target="#xs-injectables-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' :
                                        'id="xs-injectables-links-module-PublishersPageModule-a5b620c1b34cb247264f11670b49bbbd"' }>
                                        <li class="link">
                                            <a href="injectables/PublishersService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PublishersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RoutingModule.html" data-type="entity-link">RoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' : 'data-target="#xs-components-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' :
                                            'id="xs-components-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' }>
                                            <li class="link">
                                                <a href="components/AuthorFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AuthorFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BookFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BookFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GenreFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GenreFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PublishersFormComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PublishersFormComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' : 'data-target="#xs-directives-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' :
                                        'id="xs-directives-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' }>
                                        <li class="link">
                                            <a href="directives/TrimDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TrimDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/UpperFirstDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">UpperFirstDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' : 'data-target="#xs-injectables-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' :
                                        'id="xs-injectables-links-module-SharedModule-5d701c5c612a07f0ce378dbdccf6e5ea"' }>
                                        <li class="link">
                                            <a href="injectables/ErrorMsgService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>ErrorMsgService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/RestApiService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>RestApiService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/AuthorDetailsComponent.html" data-type="entity-link">AuthorDetailsComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BaseComponent.html" data-type="entity-link">BaseComponent</a>
                            </li>
                            <li class="link">
                                <a href="components/BookDetailsComponent.html" data-type="entity-link">BookDetailsComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AppPage.html" data-type="entity-link">AppPage</a>
                            </li>
                            <li class="link">
                                <a href="classes/AuthorForm.html" data-type="entity-link">AuthorForm</a>
                            </li>
                            <li class="link">
                                <a href="classes/Base.html" data-type="entity-link">Base</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookForm.html" data-type="entity-link">BookForm</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookModel.html" data-type="entity-link">BookModel</a>
                            </li>
                            <li class="link">
                                <a href="classes/GenreForm.html" data-type="entity-link">GenreForm</a>
                            </li>
                            <li class="link">
                                <a href="classes/ModalHelper.html" data-type="entity-link">ModalHelper</a>
                            </li>
                            <li class="link">
                                <a href="classes/PublisherForm.html" data-type="entity-link">PublisherForm</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AuthorsService.html" data-type="entity-link">AuthorsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BookGenresService.html" data-type="entity-link">BookGenresService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link">BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ErrorMsgService.html" data-type="entity-link">ErrorMsgService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PublishersService.html" data-type="entity-link">PublishersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RestApiService.html" data-type="entity-link">RestApiService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IBook.html" data-type="entity-link">IBook</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDataService.html" data-type="entity-link">IDataService</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});