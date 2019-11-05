# Meteor Vue.js: Development to Deployment
![Meteor Vue](https://github.com/eadortsu/meteor-vue/raw/master/meteorvue.png)


<div class="section-inner sectionLayout--insetColumn">
    <p name="d96b" class="graf graf--p graf-after--h3">In this article, we are going to learn how to use the awesomeness
        of vue.js as the front-end of meteor to build the “world’s most powerful TODO application”. We will cover meteor
        vue integration, <a
                href="https://medium.com/r/?url=https%3A%2F%2Fvuetifyjs.com%2Fen%2Fintroduction%2Fwhy-vuetify"
                data-href="https://medium.com/r/?url=https%3A%2F%2Fvuetifyjs.com%2Fen%2Fintroduction%2Fwhy-vuetify"
                class="markup--anchor markup--p-anchor" rel="noopener"
                data-tooltip="https://medium.com/r/?url=https%3A%2F%2Fvuetifyjs.com%2Fen%2Fintroduction%2Fwhy-vuetify"
                data-tooltip-position="bottom" data-tooltip-type="link" target="_blank">vuetify</a>, publication and
        subscription, server and client unit testing and finally deployment to web and mobile.</p>
    <p name="e3ab" class="graf graf--p graf-after--p">For use to build our “world’s most powerful TODO application” we
        will need the following: A text editor (Webstorm, VSCode), your Brain and two cups of coffee. That’s the good
        thing about meteor, installs all you need out of the box.</p><h4 name="b634"
                                                                         class="graf graf--h4 graf-after--p">Installing
    Meteor on OSX /&nbsp;LINUX</h4>
    <p name="192a" class="graf graf--p graf-after--h4">Run the following command in your terminal to install the latest
        official Meteor release:</p>
    <pre name="971e" class="graf graf--pre graf-after--p"><code class="markup--code markup--pre-code">curl https://install.meteor.com/ | sh</code></pre>
    <h4 name="d7dd" class="graf graf--h4 graf-after--pre">Installing Meteor on&nbsp;Windows</h4>
    <p name="9c5b" class="graf graf--p graf-after--h4">First, install <a
            href="https://medium.com/r/?url=https%3A%2F%2Fchocolatey.org%2Finstall"
            data-href="https://medium.com/r/?url=https%3A%2F%2Fchocolatey.org%2Finstall"
            class="markup--anchor markup--p-anchor" rel="noopener"
            data-tooltip="https://medium.com/r/?url=https%3A%2F%2Fchocolatey.org%2Finstall"
            data-tooltip-position="bottom" data-tooltip-type="link" target="_blank">Chocolatey</a>&nbsp;:</p>
    <pre name="8a64" class="graf graf--pre graf-after--p">Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('<a
            href="https://medium.com/r/?url=https%3A%2F%2Fchocolatey.org%2Finstall.ps1%27"
            data-href="https://medium.com/r/?url=https%3A%2F%2Fchocolatey.org%2Finstall.ps1'"
            class="markup--anchor markup--pre-anchor" rel="nofollow noopener" target="_blank">https://chocolatey.org/install.ps1'</a>))</pre>
    <p name="753f" class="graf graf--p graf-after--pre">Then run this command using an Administrator command prompt:</p>
    <pre name="4ccd" class="graf graf--pre graf-after--p">choco install meteor</pre>
    <p name="4185" class="graf graf--p graf-after--pre"><strong class="markup--strong markup--p-strong">Creating Meteor
        App</strong></p>
    <p name="282f" class="graf graf--p graf-after--p">Now that meteor is installed we can create a new meteor project by
        running:</p>
    <pre name="efb4" class="graf graf--pre graf-after--p">meteor create the-todos-app</pre>
    <p name="ebd7" class="graf graf--p graf-after--pre">this will create a new meteor project with <a
            href="https://medium.com/r/?url=http%3A%2F%2Fblazejs.org%2Fguide%2Fintroduction.html"
            data-href="https://medium.com/r/?url=http%3A%2F%2Fblazejs.org%2Fguide%2Fintroduction.html"
            class="markup--anchor markup--p-anchor" rel="noopener"
            data-tooltip="https://medium.com/r/?url=http%3A%2F%2Fblazejs.org%2Fguide%2Fintroduction.html"
            data-tooltip-position="bottom" data-tooltip-type="link" target="_blank">Blaze</a> as the default frontend.
        to use Vue, we have to install Vue.js using:</p>
    <pre name="cd4c" class="graf graf--pre graf-after--p"><code class="markup--code markup--pre-code">meteor npm install --save vue<br>meteor add akryum:vue-component</code></pre>
    <p name="6375" class="graf graf--p graf-after--pre">The <code class="markup--code markup--p-code"><a
            href="https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fmeteor-vue%2Fvue-meteor%2Ftree%2Fmaster%2Fpackages%2Fvue-component"
            data-href="https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fmeteor-vue%2Fvue-meteor%2Ftree%2Fmaster%2Fpackages%2Fvue-component"
            class="markup--anchor markup--p-anchor" rel="noopener"
            data-tooltip="https://medium.com/r/?url=https%3A%2F%2Fgithub.com%2Fmeteor-vue%2Fvue-meteor%2Ftree%2Fmaster%2Fpackages%2Fvue-component"
            data-tooltip-position="bottom" data-tooltip-type="link" target="_blank">akryum:vue-component</a></code>
        meteor package allows the use of <a
                href="https://medium.com/r/?url=https%3A%2F%2Fvuejs.org%2Fv2%2Fguide%2Fsingle-file-components.html"
                data-href="https://medium.com/r/?url=https%3A%2F%2Fvuejs.org%2Fv2%2Fguide%2Fsingle-file-components.html"
                class="markup--anchor markup--p-anchor" rel="noopener"
                data-tooltip="https://medium.com/r/?url=https%3A%2F%2Fvuejs.org%2Fv2%2Fguide%2Fsingle-file-components.html"
                data-tooltip-position="bottom" data-tooltip-type="link" target="_blank">Vue’s Single File Components</a>
        with the&nbsp;.vue file extensions in your meteor app just like a traditional Vue project.</p>
    <p name="5a06" class="graf graf--p graf-after--p">Now let's create and modify these three files:<code
            class="markup--code markup--p-code">/client/App.vue</code> The root component of your app <code
            class="markup--code markup--p-code">/client/main.js</code> Initializing the Vue app in Meteor startup<code
            class="markup--code markup--p-code">/client/main.html</code> containing the body with the #app div We need a
        base HTML document that has the <code class="markup--code markup--p-code">app</code> id.</p>
    <p name="dcb8" class="graf graf--p graf--empty graf-after--p" data-scroll="native"><br></p>
    <p name="2df6" class="graf graf--p graf-after--p">To run your new app:</p>
    <pre name="4241" class="graf graf--pre graf-after--p">cd the-todos-app</pre>
    <pre name="1dfe" class="graf graf--pre graf-after--pre">meteor</pre>
    <p name="41af" class="graf graf--p graf--empty graf-after--pre graf--trailing"><br></p></div>
