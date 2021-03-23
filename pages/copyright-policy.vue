<template>
  <div class="px-4 py-6 bg-gray-100 lg:py-12 lg:px-0">
    <section class="w-full m-auto lg:w-9/12">
      <MainTitle theme-color="primary" class="mb-6">
        <template slot="titleEN">
          Copyright Policy
        </template>
        <template slot="titleTW">
          版權政策
        </template>
      </MainTitle>
      <div class="px-4 py-8 bg-white lg:px-12 shadow-10">
        <p class="mb-6">
          使用鏡好聽服務（以下稱本服務）即代表您同意根據所有適用法律、規則和規範或針對本服務或內容的其他使用限制規定使用本服務，包括與其相關的所有特色和功能與本智慧財產權保護政策。
        </p>
        <p class="mb-6">
          本服務所使用之軟體或程式、網站上所有內容，包括但不限於著作、圖片、檔案、資訊、資料、網站架構、網站畫面的安排、網頁設計，若未特別註明，均由鏡文學股份有限公司(以下稱本公司)或其他權利人依法擁有其智慧財產權，包括但不限於商標權、專利權、著作權、營業秘密與專有技術等。非經權利人授權同意，任何人不得逕自就內容之全部或一部分使用、修改、重製、公開播送、改作、散布、發行、公開發表、進行還原工程、解編或反向組譯；或利用本服務聲音、文字、圖檔、圖片或其他著作或資料的局部或全部內容或服務，賺取利益，或從事任何其他不合法行為。
        </p>
        <p class="mb-6">
          您同意不以包含但不限於存檔、重製、散布、修改、展示、公開播放、出版、授權、製作衍生作品、出售或使用（除非明確授權）本服務所含的內容和資訊或從本服務或透過鏡好聽取得的內容和資訊。您還同意不：規避、移除、更改、停用、降級或妨礙本服務的任何內容保護措施；使用任何網路機器人
          (robot)、網路蜘蛛 (spider)、網路抓取 (scraper)
          程式或其他自動化方式來取用本服務；將透過本服務取得的任何軟體或其他產品或程式進行反解譯、進行還原工程或反組譯；插入任何程式碼或產品或以任何方式操控本服務的內容；或使用任何資料探勘、資料收集或資料擷取方法。
        </p>
        <p class="mb-6">
          此外，您同意不上傳、發佈、以電郵傳送或以其他方式發送或傳輸任何旨在干擾、破壞或限制與本服務相關的任何電腦軟體或硬體或電信設備功能的資料，包括任何軟體病毒或其他任何電腦程式碼、檔案或程式。
          如果您違反智慧財產權保護政策或參與非法或詐欺使用服務，則我們可終止或限制您使用我們的服務。
        </p>
        <p class="mb-6">
          若您欲引用或轉載前述軟體、程式或網站內容，必須依法取得本公司或其他權利人的事前書面同意。尊重智慧財產權是您應盡的義務，如有違反，您應對本公司及其相關公司，及其董事，職員，雇員及代理商負損害賠償責任（包括但不限於訴訟費用及律師費用等）。
        </p>
        <p class="mb-6">
          倘若您是聲音、文字、圖檔、圖片或其他著作或資料內容著作權人，但與本公司未曾聯繫過授權事宜，如發現有侵害之情事，敬請您利用傳真或E-mail
          通知我們。我們一定會基於尊重著作權之立場，於接獲您的資料後，儘速與您聯繫。
        </p>
        <p>聯絡方式：</p>
        <p>Fax：02-6633-3544</p>
        <p>E-mail：voiceservice@mirrormedia.mg</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CopyrightPolicy',
  head () {
    return {
      titleTemplate: '版權政策 - 鏡好聽 Mirror Voice',
      meta: [
        {
          hid: 'og:title',
          name: 'og:title',
          content: '版權政策 - 鏡好聽 Mirror Voice'
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: process.env.BASE_URL + this.$route.fullPath
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: '版權政策 - 鏡好聽 Mirror Voice'
        }
      ]
    }
  },
  mounted () {
    this.$scrollTo('body', 0)
  }
}
</script>
