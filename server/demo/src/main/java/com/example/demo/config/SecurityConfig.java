package com.example.demo.config;

import com.example.demo.auth.*;
import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@AllArgsConstructor
@EnableWebSecurity
public class SecurityConfig {
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .cors().configurationSource(corsConfigurationSource())
                .and()
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable()
                .httpBasic().disable()
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer())
                .and()
                .authorizeHttpRequests(authorize -> authorize
//                                .requestMatchers(CorsUtils::isPreFlightRequest).permitAll()
                                .antMatchers(HttpMethod.OPTIONS, "/table/**").permitAll()
                                .antMatchers(HttpMethod.POST, "/member").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.PATCH, "/member/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/member/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/member/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.POST, "/table/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.PATCH, "/table/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.PATCH, "/table/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/table/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/table/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/table/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/table/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/table/**/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.POST, "/category/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.PATCH, "/category/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/category/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.PATCH, "/category/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/category/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.PATCH, "/menu/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/menu/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/menu/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.POST, "/order/**").permitAll()
                                .antMatchers(HttpMethod.DELETE, "/order/**/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.GET, "/order/**/**").permitAll()
                                .antMatchers(HttpMethod.PATCH, "/order/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.POST, "/call/**/**").permitAll()
                                .antMatchers(HttpMethod.GET, "/call/**").hasAnyRole("USER", "ADMIN")
                                .antMatchers(HttpMethod.DELETE, "/call/**/**").hasAnyRole("USER", "ADMIN")
                                .anyRequest().permitAll()
                );
        return http.build();
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.addAllowedOriginPattern("*");
        configuration.addAllowedMethod("*");
        configuration.addAllowedHeader("*");
        configuration.setAllowCredentials(true);
        configuration.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer,
            HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager =
                    builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter =
                    new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/member/login");

            jwtAuthenticationFilter.setAuthenticationSuccessHandler(
                    new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(
                    new MemberAuthenticationFailureHandler());

            JwtVerificationFilter jwtVerificationFilter =
                    new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder.addFilter(jwtAuthenticationFilter)
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}