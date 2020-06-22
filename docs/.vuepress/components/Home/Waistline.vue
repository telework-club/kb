<template>
  <v-app style="min-height: auto;">
    <Home-Header />

    <v-container fluid>
      <v-row dense align="stretch">
        <v-col :cols="12" :md="4" :sm="6">
          <v-card
            color="#1F7087"
            dark
            height="180"
            @click="$router.push('/telework/what')"
          >
            <v-card-title>什么是远程工作</v-card-title>
            <v-card-text
              >远程工作不是简单的离开固定的办公场所那么简单，远程的真正含义是协作方式上的延伸，以及由此带来管理上的变化。</v-card-text
            >
          </v-card>
        </v-col>
        <v-col :cols="12" :md="4" :sm="6">
          <v-card
            color="#1F7087"
            dark
            height="180"
            @click="$router.push('/telework/when')"
          >
            <v-card-title>远程工作是否适合</v-card-title>
            <v-card-text
              >就像万事没有银弹一样，远程并非适合所有的行业和职位，是在一定限制框架下的工作方式转变，这种限制一旦突破，将引领新的工作方式变革。</v-card-text
            >
          </v-card>
        </v-col>
        <v-col :cols="12" :md="4">
          <v-card
            color="#1F7087"
            dark
            height="180"
            @click="$router.push('/telework/why')"
          >
            <v-card-title>为什么要远程工作</v-card-title>
            <v-card-text
              >远程的方式，可以突破地域和时空的限制，从而让整个团队乃至公司的运行效率更有突破性，采用远程，某种意义上可以让组织的灵敏性变高，进而快速应对变化。</v-card-text
            >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Home-Features />
    <Home-Footer />
  </v-app>
</template>
