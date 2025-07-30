<template>
  <div class="w-full flex justify-center mb-20">
    <div class="container">
      <h1 class="font-bold text-4xl py-5">Spring Boot Microservice Security JWT</h1>
      <p class="text-lg">A library to quickly set up JWT authentication in a Spring Boot application using RSA keys.
      </p>
      Source code is available on
      <a href="https://github.com/ilyasdotdev/spring-boot-microservice-security-jwt" target="_blank" class="bg-gray-300 rounded p-1">
        <i class="pi pi-github">
        </i><span class="text-blue-500 font-bold"> Github</span>
      </a>
      
      <h2 class="text-3xl font-bold py-5">Features</h2>
      <ul class="list-disc ml-10">
        <li>Generate JWT tokens with RSA keys</li>
        <li>Validate JWT tokens</li>
        <li>Restrict access to endpoints based on scopes</li>
        <li>Customizable JWT claims</li>
        <li>Basic authentication</li>
      </ul>

      <h2 class="text-3xl font-bold py-5">Getting Started</h2>
      <p class="text-lg mb-5">
        Follow these steps to set up JWT authentication in your Spring Boot application:
      </p>
      
      <ol class="list-decimal ml-10 mb-5">
        <li>Create a spring boot application using <a href="https://start.spring.io" target="_blank" class="text-blue-500">start.spring.io</a></li>
        <li>Add the dependency in your project:</li>
      </ol>
      
      <CodeBlock :code="dependencyCode" language="xml"></CodeBlock>
      
      <ol class="list-decimal ml-10 mb-5" start="3">
        <li>Execute below scripts in <code class="language-bash">src/main/resources</code> directory to create public and private keys:</li>
      </ol>
      
      <CodeBlock :code="keysGenerationCode" language="bash"></CodeBlock>
      
      <ol class="list-decimal ml-10 mb-5" start="4">
        <li>Add the keys to your <code class="language-yml">application.yml</code> file:</li>
      </ol>
      
      <CodeBlock :code="applicationYmlCode" language="yml"></CodeBlock>
      
      <p class="my-5">Keys can be generated anywhere.</p>
      
      <h1 class="font-bold text-4xl my-10">That's all you need to do to get started with JWT authentication in your Spring Boot application.</h1>
      
      <h2 class="text-3xl font-bold py-5">Detailed Documentation</h2>
      
      <h3 class="text-2xl font-bold py-5">Generating JWT Token</h3>
      <p class="mb-5">
        While creating a web application there could be an endpoint which authenticates users and provides JWT tokens.
        An <code class="language-java">AuthService</code> bean is provided to generate JWT tokens. You can inject it in your controller class and use it to generate JWT tokens.
      </p>
      
      <CodeBlock :code="generateTokenCode" language="java"></CodeBlock>
      
      <p class="my-5">
        While consuming secured APIs, this token should be passed in the <code class="language-http">Authorization</code> header as a Bearer token.
        Then the application will automatically validate the token for you.
      </p>
      
      <h3 class="text-2xl font-bold py-5">Changing JWT Token Expiry</h3>
      <p class="mb-5">
        By default, the token will be valid for 1 hour. You can change this by setting below property in your <code class="language-yml">application.yml</code> file:
      </p>
      
      <CodeBlock :code="expiryConfigCode" language="yml"></CodeBlock>
      
      <h3 class="text-2xl font-bold py-5">Retrieving JWT</h3>
      <p class="mb-5">
        If you want to retrieve the JWT token from the request, you can use the <code class="language-java">AuthService</code> bean:
      </p>
      
      <CodeBlock :code="retrieveJwtCode" language="java"></CodeBlock>
      
      <p class="my-5">
        This will return the <code class="language-java">org.springframework.security.oauth2.jwt.Jwt</code> object which contains the token and its claims.
      </p>
      
      <h3 class="text-2xl font-bold py-5">Restricting endpoint for specific scope</h3>
      <p class="mb-5">
        By default, A SecurityFilter chain is configured for you which can be overridden by creating your own <code class="language-java">SecurityFilterChain</code> bean:
      </p>
      
      <CodeBlock :code="securityFilterChainCode" language="java"></CodeBlock>
      
      <p class="my-5">
        Notice while generating a token, the scope was passed without <code class="language-java">SCOPE_</code> prefix, but when using in filter chain it should be prefixed by <code class="language-java">SCOPE_</code>.
      </p>
      
      <p class="my-5">
        The <code class="language-java">HttpSecurity</code> which is injected in security filter chain bean is already configured to:
      </p>
      
      <ol class="list-decimal ml-10 mb-5">
        <li>Use JWT authentication</li>
        <li>Disable CSRF</li>
        <li>Disable form login</li>
        <li>Disable httpBasic</li>
        <li>Exception handling is configured to return 401 Unauthorized for unauthorized requests</li>
      </ol>
      
      <p class="my-5">
        So, you don't have to do these configurations again.
      </p>
      
      <div class="bg-gray-100 p-5 rounded-lg my-10">
        <p class="font-bold">Note:</p>
        <p>This library also uses <code class="language-java">spring-boot-microservice</code> dependency, so you don't have to add it again in your project.</p>
        <p>Have a look at <a href="https://github.com/ilyasdotdev/spring-boot-microservice" target="_blank" class="text-blue-500">spring-boot-microservice</a> documentation.</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import { ref } from 'vue'

const dependencyCode = ref(`
<dependency>
    <groupId>io.github.ilyasdotdev</groupId>
    <artifactId>spring-boot-microservice-security-jwt</artifactId>
    <version>1.0.0</version>
</dependency>
`)

const keysGenerationCode = ref(`
openssl genrsa -out keypair.pem 2048
openssl rsa -in keypair.pem -pubout -out publickey.pem
openssl rsa -in keypair.pem -out privatekey.pem
`)

const applicationYmlCode = ref(`
io:
  github:
    ilyasdotdev:
      microservice:
        security:
          jwt:
            rsa:
              private-key: classpath:privateKey.pem
              public-key: classpath:publicKey.pem
`)

const generateTokenCode = ref(`
String token = authService.generateToken(
            "user", // subject
            "https://www.domain.com", // issuer
            Map.of("k1", v1), // custom claims
            List.of("ADMIN") // scopes
    );
`)

const expiryConfigCode = ref(`
io:
  github:
    ilyasdotdev:
      microservice:
        security:
          jwt:
            expiryUnit: HOURS # or MINUTES, DAYS, WEEKS // Any java.time.temporal.ChronoUnit
            expiry: 60 # value of the expiry unit
`)

const retrieveJwtCode = ref(`
authService.getAuthenticatedPrincipal();
`)

const securityFilterChainCode = ref(`
@Bean
public SecurityFilterChain SecurityFilterChain(HttpSecurity http) throws Exception {
    http
            .authorizeHttpRequests(customizer ->
                    customizer
                            .requestMatchers("/api/auth").permitAll()
                            .requestMatchers("/api/data").hasAuthority("SCOPE_ADMIN")
                            .requestMatchers("/api/**").authenticated()
                            .anyRequest().permitAll()
            );
    return http.build();
}
`)
</script>