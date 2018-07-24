import React, { Component } from 'react';
import Box from './components/Box'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Box body={
              <div>
                <img width="200px" src="img/logo.png" />
              </div>
          } />

        <Box title={<div>MIM PRESENTS: MESSAGE IN A MIX</div>} body={
                <div>
                  Message In A Melody at UCLA is proud to announce its fifth annual spring quarter concert: MESSAGE IN A MIX.

                  This year, we are launching a brand new fundraising campaign for our annual spring concert which will take place on May 15th from 6:30 - 10:30 pm in Kerckhoff Grand Salon. The concert functions both as a critical fundraising platform as well as a celebration of MIM’s year-long fundraising efforts for pediatric cancer research at the <a href="https://cancer.ucla.edu/">Jonsson Comprehensive Cancer Center.</a>
                  <br /><br />
                  Student DJs representing several UCLA student organizations will compete in a social media campaign leading up to the event, fundraising with their organization and helping our cause reach a larger audience. Those who finish in the “Top 8” in points earned will earn a spot to perform a 30-minute DJ set in our concert! Along the way, those at the top of the leaderboard will be able to earn prizes and giveaways for the respective members of each organization.
                  <br />
                  <h2>WHAT IS MY ROLE AS A DJ?</h2>
                  Over the course of the next few weeks, your goal is to fundraise as much as possible for pediatric cancer research at UCLA through   <a href="http://bit.ly/messageinamix2018">our GoFundMe campaign</a>. You are welcome (and encouraged!) to utilize your network of support (i.e. friends, relatives, members of your organization) to raise money for our cause.

As mentioned, the “Top 8” DJ’s and artists who earn the most points will be able to perform in our concert on May 15th and earn prizes for their organization which will be announced throughout the duration of the campaign. <br/>
<h2>1 Dollar = 1 Point</h2>One point will be awarded for each dollar raised from your organization. <b>As a result, please have your donors indicate your organization's name in the “LEAVE A COMMENT” section on our GoFundMe page when they donate.</b> This will allow us to track how much each of you is responsible for fundraising. We will also provide opportunities throughout the campaign to earn points through other forms of participation – stay tuned!
                  <br />
                  <a href="https://docs.google.com/spreadsheets/d/1W2YnzkzZvkcPDliLx4dS22e0TniXruAMQBDpw182KOY/edit?usp=sharing">
                    <div class="leaderboard">
                      Click Here For Points Leaderboard
                    </div>
                  </a>
                    <a href="register.html">
                      <div class="register">
                        Click Here For DJ Registration
                      </div>
                    </a>
                    </div>
          } />

            <Box title="MESSAGE IN A MELODY" body={
                  <div>
                    Message in a Melody is a student-run organization at UCLA that hosts
                    music-centric social events to raise money for pediatric cancer research.
                    Using the power of live music, MIM fosters a tight-knit community of passionate
                    students and fights cancer by supporting the Pediatric Oncology Department
                    at Mattel Children's Hospital. Past MIM events have featured upcoming
                    and high profile performers such as Anna Lunoe, Autograf, and Brownies & Lemonade.
                  </div>
              } />

          <Box title="STARTED IN 2014" body={
              <div>
                Message in a Melody began as a fundraising campaign and benefit concert
                created by the Electronic Dance Music Club at UCLA. This idea was spearheaded by
                Elizabeth Matusov who was inspired by the courage her high school friend, Ashley
                Jensen-Pray, showed in her fight against a rare form of soft tissue cancer. Although
                Ashley passed away in December 2013, her story lives on with Message in a Melody,
                touching the hearts of all those around her and the entire UCLA community.
                <br /><br />
                All members in EDMC had been personally affected by cancer, whether through friends
                or family members. Inspired by Ashley, EDMC members took action as an UCLA
                student group to reach out and bring forth this powerful cause to our fellow peers and
                inspire change.
                <br /><br />
                Message in a Melody's first benefit concert was hosted in the Ackerman Grand
                Ballroom, located on the UCLA Campus on May 26, 2014. Featuring DJ and producer <a href="https://soundcloud.com/kastle">Kastle</a> and
                two student DJs, <a href="https://soundcloud.com/bvsd">BVSD</a> and <a href="http://www.thomrugo.com/">Thom Rugo</a>,
                the benefit concert was an incredible success, with over 250 attendees. A cancer wall was
                also created in the time leading up to the benefit concert, allowing the UCLA community
                to sign the huge wall for anyone they know that has been affected by cancer. This
                aggregation of support was displayed on the night of the benefit concert, showing the
                strength in our community against cancer.
              </div>
            } />
          <Box title="2015" body={
              <div>
                Inspired by the success of the 2014 campaign, Message in a Melody 2015
                continued to raise funds and awareness for pediatric cancer. Whereas the original
                team only consisted of five amazing members, the team grew to to twenty
                individuals. The team shifted the campaign's focus from music to education and
                awareness on childhood cancer, although music remained an integral part of Message in a
                Melody. The 2015 benefit concert featured <a href="https://soundcloud.com/anna-lunoe">Anna Lunoe</a>, <a href="https://soundcloud.com/justin-jay">Justin Jay</a>,
                and student DJs <a href="https://soundcloud.com/bvsd">BVSD</a> &amp; <a href="https://soundcloud.com/esaue-official">Esaue</a>.
              </div>
            } />

          <Box title="2016 & BEYOND" body={
              <div>
                Message in a Melody continued to make a name for itself across campus, featuring <a href="https://soundcloud.com/autografmusic">Autograf</a> and
                student DJ group <a href="https://soundcloud.com/poundcakemusic">#CAKE</a> in its 2016 benefit concert.
                In 2017, Message in a Melody became an independent student organization at UCLA,
                expanded its efforts, and hosted the UCLA alumni-founded <a href="http://browniesandlemonade.com/">Brownies & Lemonade</a> for its <a href="http://www.laweekly.com/slideshow/brownies-and-lemonade-crashes-ucla-for-cancer-benefit-party-8265669">
                2017 benefit concert.</a> For the 2017-18 academic year, MIM plans to further
                expand its scope by hosting a series of events throughout the year and
                continuing to use the power of live music to effect change.
              </div>
            } />

          <Box title="A POEM BY ASHLEY JENSEN-PRAY" body={
              <div>
                She was just another teenage girl,                  <br />
              Filled with youth and curiosity,                    <br />
            One day she came to discover,                       <br />
          What never seemed like a possibility.               <br />
        Her world fell apart like never before,             <br />
      And all she could do was watch idly by,             <br />
    She wanted to run the other way,                    <br />
  But instead she got ready to fight.                 <br />
She knew she was a fighter,                         <br />
                For her life had never been easy,                   <br />
              But she found an unknown strength within,           <br />
            That not even she could believe.                    <br />
          The cancer tried its hardest,                       <br />
        To wither her away to nothing,                      <br />
      But she had a fire in her eyes,                     <br />
    Her life wasn't for the taking.                     <br />
  She fought her battle every day,                    <br />
Going through the tunnel to get to the light,       <br />
                She was a warrior with a passion for life,          <br />
              By being relentless, she did it..she won the fight. <br />
            <br />
                – Ashley Jenson-Pray                                 <br />
              Rest in Peace 12.08.2013
              </div>
            } />

          <Box body={
            <div>
              <div className="icon">
              <a href="http://instagram.com/mim.ucla/" target="_blank" class="handle">
                <img src="img/instagram.png" />
              </a>
              </div>
              <div className="icon">
              <a href="mailto:board@uclamim.com" target="_blank" class="handle">
                <img src="img/email.png" />
              </a>
              </div>
              <div className="icon">
              <a href="https://www.facebook.com/mim.ucla" target="_blank" class="handle">
                <img src="img/facebook.png" />
              </a>
            </div>
          </div>
          } />

        <Box body={
            <div className="copy">
              &copy; Message in a Melody 2018
            </div>
        } />

        </div>
      </div>
    );
  }
}

export default App;
