<script>
    import logo from "$lib/assets/buntini.png";
</script>

<div class="navbar">
    <img class="logo" alt="logo" src="{logo}" />
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
        margin: 0 10%;
        height: 50px;

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

                &:hover {
                    background: rgb(255, 255, 255, 0.1);
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
</style>