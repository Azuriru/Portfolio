<script lang="ts">
    import logo from "$lib/assets/buntini.png";
    import twinkle from "$lib/assets/twinkle.png";

    export let showLogo: boolean = true;
</script>

<div class="navbar">
    {#if showLogo}
        <img class="logo" alt="logo" src="{logo}" />
    
    {:else}
        <img class="logo" alt="logo" src="{twinkle}" style="filter: hue-rotate(278deg) saturate(1.5) contrast(0.7) brightness(1.3)" />    
    {/if}

    <div class="navbar-links">
        <a href="/">About</a>
        <a href="/">Skillset</a>
        <a href="/">Projects</a>
    </div>
</div>

<style lang="scss">
    .navbar {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        padding: 0 10%;
        height: 60px;
        width: 100%;

        @media (max-width: 700px) {
            padding: 0 2%;
        }

        .navbar-links {
            display: flex;
            flex-grow: 1;
            height: 100%;
            
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-grow: 1;
                height: 100%;
                transition: 0.5s;
                background-image: linear-gradient(to right, #05FEFE, #46beff, #7089ff 80%);
                background-attachment: fixed;
                background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;

                &:hover {
                    background-clip: initial;
                    -webkit-text-fill-color: #181818;
                }
            }
        }

        .logo {
            width: 60px;
            margin-right: 50px;
            opacity: 0.7;
            transition: opacity .5s;

            @media (max-width: 700px) {
                display: none;
            }

            &:hover {
                opacity: 1;
            }
        }
    }    


    // .irrelevant::after {
    //     content: '';
    //     width: 100%;
    //     height: 5px;
    //     position: absolute;
    //     background: linear-gradient(to right, #0d9e9e, #5270ba, transparent);
    // }
</style>