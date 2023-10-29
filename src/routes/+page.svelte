<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import FontAwesome from '$lib/components/FontAwesome.svelte';
    import azugo from '$lib/assets/buntini_logo.png';
</script>

<div class="home">
    <NavBar showLogo={false}/>
    <main>
        <div class="info">
            <div class="logo">
                <img src="{azugo}" alt="logo" />
            </div>
            <div class="info-wrapper">
                <div class="header">About Me</div>
                <div class="divider" />
                <div class="text">
                    Everyone and their mom has a website nowadays, I may as well join in. Hopefully I'll make it past the "forever under construction" stage, but this is all you're getting for now. I'll try to keep it up to date, but I have the memory fiercely rivaling that of a goldfish, so I may even forget this site exists in its entirety so, don't overestimate me.

                    While I'm normally woefully incompetent and deplorably pathetic at just about everything I attempt to do, once in a blue moon I may do something midly considered useful to someone, so do feel free to leave a message.
                </div>
                <div class="divider" />
                <div class="contact-group">
                    <a title="Azuriru" href="https://github.com/Azuriru" target="_blank" >
                        <FontAwesome name="github" />
                    </a>
                    <a title="kegumine" href="https://discord.com/users/187524257280950272" target="_blank">
                        <FontAwesome name="discord" />
                    </a>
                    <a title="Robyn" href="https://stackoverflow.com/users/7400301/robyn" target="_blank">
                        <FontAwesome name="stack-overflow" />
                    </a>
                    <a title="gamemoderatorobyn@gmail.com" href="mailto:gamemoderatorobyn@gmail.com" target="_blank">
                        <FontAwesome name="envelope" type="solid" />
                    </a>
                </div>
            </div>
        </div>
    </main>
</div>

<style lang="scss">
    .home {
        display: flex;
        flex-direction: column;
        height: 100%;

        main {
            height: 100%;
            padding: 0 120px;
            
            .info {
                display: flex;
                height: 100%;
                align-items: center;
                justify-content: center;

                .logo {
                    height: 350px;

                    img {
                        height: 100%;
                    }
                }

                .info-wrapper {
                    display: flex;
                    flex-direction: column;

                    .divider {
                        width: 100%;
                        height: 2px;
                        background: rgb(255 255 255 / 10%);
                        margin: 12px 0;
                    }

                    .header {
                        padding: 0 12px;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }

                    .contact-group {
                        align-self: flex-end;
                        padding: 0 12px;

                        a {
                            font-size: 20px;
                            color: rgb(255, 255, 255, .5);
                            transition: .5s color;

                            &:hover {
                                color: rgb(255, 255, 255, .95);
                            }
                        }

                        a:not(:first-of-type) {
                            margin-left: 12px;
                        }

                        a img {
                            height: 18px;
                        }
                    }
                    
                    .text {
                        padding: 0 12px;
                        line-height: 26px;
                        letter-spacing: 0.5px;
                        white-space: pre-line;
                    }
                }
            }

        }
    }
</style>