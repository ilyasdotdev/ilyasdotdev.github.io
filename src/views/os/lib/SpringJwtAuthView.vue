<template>
  <div class="w-full flex justify-center mb-20">
    <div class="container">
      <h1 class="font-bold text-4xl py-5">Spring JWT Auth</h1>
      <p class="text-lg">An opensource library to quickly implement JWT authentication on a spring boot application.
      </p>
      Source code is available on
      <a href="https://github.com/ilyasdotdev/spring-jwt-auth" target="_blank" class="bg-gray-300 rounded p-1">
        <i class="pi pi-github">
        </i><span class="text-blue-500 font-bold"> Github</span>
      </a>
      <h2 class="text-3xl font-bold py-5">Getting Started</h2>
      <h2 class="text-2xl font-bold py-5">Introduction</h2>
      <p class="text-lg mb-5">
        Before we start, let's understand some basic concepts.
      </p>
      <ul class="list-disc ml-10">
        <li>
          To represent json web token, we use <code class="language-java">Token</code> interface.
        </li>
        <li>
          There is a helper class called <code class="language-java">JwtHelper</code> that helps to
          serialize/deserialize json to/from Token object.
        </li>
        <li>
          This is a built-in OncePerRequest Filter called <code class="language-java">JWTAuthenticationFilter</code>
          which we can place in our spring security filter chain.
        </li>
      </ul>
      <p class="my-5">Add the following dependency to the project.</p>
      <CodeBlock :code="dependencyCode" language="xml"></CodeBlock>
      <p class="my-5">To let spring scan library package, Add below code to main class.
      </p>
      <CodeBlock :code="dependencyInjectionCode" language="java"></CodeBlock>
      <p class="my-5">Create an implementation of Token interface to represent our json web token</p>
      <CodeBlock :code="jwtToken" language="java"></CodeBlock>
      <p class="my-5">
        To secure all our endpoints let say starting with /api, security configuration may look like this.
      </p>
      <CodeBlock :code="securityFilterChain" language="java"></CodeBlock>
      <p class="my-5">Add below properties in spring configuration file</p>
      <CodeBlock :code="configurations" language="java"></CodeBlock>
      <ul class="list-disc ml-10 mt-5">
        <li>Change secret with your secret key string</li>
        <li>Expiry unit could be any java ChronoUnit, <a class="text-blue-700"
                                                         href="https://docs.oracle.com/javase/8/docs/api/java/time/temporal/ChronoUnit.html"
                                                         target="_blank">see java official documentation</a>.
        </li>
      </ul>
      <h1 class="font-bold text-4xl my-10">That's all, We have successfully secured our spring boot application by jwt
        authentication</h1>
      <h2 class="text-3xl font-bold">Generating Jwt Token</h2>
      <p class="py-5">We can create an http endpoint to create a jwt token.<br>
        To create an endpoint which returns jwt token, We can create simple rest controller.
      </p>
      <CodeBlock :code="jwtEndpoint" language="java" />
      <h2 class="text-3xl font-bold pt-5">Getting authenticated user detail</h2>
      <p class="py-5">Once user is authenticated, we can get user details from jwt token.</p>
      <CodeBlock :code="userDetail" language="java"></CodeBlock>
    </div>
  </div>
</template>
<script setup lang="ts">
import CodeBlock from '@/components/CodeBlock.vue'
import { ref } from 'vue'

const dependencyCode = ref(`
<dependency>
  <groupId>io.github.ilyasdotdev</groupId>
  <artifactId>spring-jwt-auth</artifactId>
  <version>0.0.1</version>
</dependency>
`)

const dependencyInjectionCode = ref(`
@ComponentScan(basePackages = {"io.github.ilyasdotdev.spring.auth.jwt"})
`)

const securityFilterChain = ref(`
@Bean
@Order(2)
public SecurityFilterChain securityFilterChain(HttpSecurity http, JwtHelper jwtHelper) throws Exception {
    JWTAuthenticationFilter jwtAuthenticationFilter = new JWTAuthenticationFilter(jwtHelper, JwtToken.class);
    return http
            .securityMatcher("/api/**")
            .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class)
            .csrf(AbstractHttpConfigurer::disable)
            .cors(AbstractHttpConfigurer::disable)
            .formLogin(AbstractHttpConfigurer::disable)
            .httpBasic(AbstractHttpConfigurer::disable)
            .build();
}
`)

const jwtToken = ref(`
@Data
class JwtToken implements Token {

    private String username;
    private String email;
    private List<String> roles;

    @Override
    public Collection<String> getRoles() {
        return roles;
    }
}
`)

const configurations = ref(`
ilyasdotdev:
  spring:
    auth:
      jwt:
        secret: 792F413F4428472B4B6250655368566D597133743677397A244326452948404D635166546A576E5A7234753778214125442A472D4A614E645267556B58703273
        expiry-unit: minutes
        expiry: 30
`)

const jwtEndpoint = ref(`
@RestController
@RequiredArgsConstructor
class AuthenticationController {

private final JwtHelper jwtHelper;

@GetMapping("/api/auth")
public String auth() {

    JwtToken jwtToken = new JwtToken();
    jwtToken.setUsername("test user");
    jwtToken.setEmail("email@domain.com");
    jwtToken.setRoles(List.of("USER", "ADMIN"));

    return jwtHelper.serializeJwtToken(jwtToken);
}
`)

const userDetail = ref(`
JwtToken token = (JwtToken) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
`)
</script>