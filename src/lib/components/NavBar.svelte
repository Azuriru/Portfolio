<script lang="ts">
    import logo from "$lib/assets/buntini.png";

    export let showLogo: boolean = true;
</script>

<div class="navbar">
    {#if showLogo}
        <img class="logo" alt="logo" src="{logo}" />
    {/if}

    <div class="navbar-links">
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Skillset</a>
        <a href="/">Projects</a>
    </div>
</div>

<style lang="scss">
    .navbar {
        display: flex;
        align-items: center;
        padding: 0 10%;
        height: 60px;
        width: 100%;

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
                background-image: linear-gradient(to right, #05FEFE -40%, #0d9e9e, #5270ba);
                background-attachment: fixed;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 2px;

                &:hover {
                    -webkit-background-clip: initial;
                    -webkit-text-fill-color: #181818;
                }
            }
        }

        .logo {
            height: 100%;
            margin-right: 50px;
            opacity: 0.7;
            transition: opacity .5s;

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