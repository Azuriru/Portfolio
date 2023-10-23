<svelte:head>
	<title>Home</title>
</svelte:head>

<script>
    import NavBar from '$lib/components/NavBar.svelte';
    import azugo from '$lib/assets/buntini_logo.png';
</script>

<div class="home">
    <NavBar showLogo={false}/>
    <main>
        <div class="info">
            <div class="logo">
                <img src="{azugo}" alt="logo"/>
            </div>
            <div class="text">
                I'm a self-taught web developer with a passion for crafting visually appealing and user-centric digital
                experiences. With a background rooted in design and development, I bring a unique perspective to my
                work. From curating eye-catching visuals to implementing responsive design strategies, my aim is to create
                seamless, adaptable experiences that resonate with users. My diverse skill set, coupled with my attentive
                eye for detail, allows me to contribute to both design and development aspects, ensuring a holistic
                approach to crafting outstanding web solutions.
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
                
                .text {
                    text-align: center;
                    line-height: 26px;
                }
            }

        }
    }

    
</style>