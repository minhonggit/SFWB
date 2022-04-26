<template>

  <div>
    <div>
        <base-header type="gradient-default" class="pb-6 pb-8 pt-5 pt-md-6">
        
            <div class="col-lg-5 col-md-6">
              <h1 class="text-white">Smart Food Waste Bin</h1>
              
            </div>
        </base-header>
    </div>
    
    
      <div class="col-xl-7">
      <!--
      <base-progress type="danger" :height="20" :value="model.CurTemp" label="Current Temperature"></base-progress>
      <base-progress type="primary" :height="20" :value="model2.CurTerm" label="Current Term"></base-progress>
      -->
      
      
      </div>
      <img src="img/brand/status.png" style="width:1152px; height:648px;"/>
<div class="row">
          <!--
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Weight"
            type="gradient-red"
            sub-title="무게"
            icon="ni ni-active-40"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> 3.48%
              </span>
              <span class="text-nowrap">Since last month</span>
            </template>
          </stats-card>
        </div>
        -->
       <div class="col-xl-1"></div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Amount"
            type="gradient-orange"
            sub-title="현재 양"
    
            icon="ni ni-chart-pie-35"
            class="mb-4 mb-xl-0"
            
          >
          
            <template v-slot:footer>
              <div role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"> </div>
               <hr>
              <h2>{{model.CurAmount}}ml</h2>
              <span class="text-nowrap">현재 쓰레기의 양은 {{model.CurAmount}}ml 입니다.</span>
            
            </template>
            
            
          </stats-card>
        </div>
        
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Temperature"
            type="gradient-green"
            sub-title="현재 온도"
            icon="ni ni-align-left-2"
            class="mb-4 mb-xl-0"
          >
            <template v-slot:footer>
              <div style='text-align:center;'>
              <img src="img/brand/temp.png" style="width:250px; height:192px;"/>
              </div>
               <hr>
              <h2>{{model.CurTemp}}°C</h2>
              <span class="text-nowrap">현재 쓰레기통 내부 온도는 {{model.CurTemp}}°C 입니다.</span>
              
            </template>
          </stats-card>
        </div>
        <div class="col-xl-3 col-lg-6">
          <stats-card
            title="Term"
            type="gradient-info"
            sub-title="현재 주기"
            icon="ni ni-time-alarm"
            class="mb-4 mb-xl-0"
          >


            <template v-slot:footer>
              
              <h3>현재 시각 : <span id='clock'></span> </h3>
             
              <div>
                <hr>
               <h2>{{model2.CurTerm}}분</h2>
              <span class="text-nowrap">{{model2.CurTerm}}분마다 한 번씩 탈취합니다.</span>
              </div>
            </template>
          </stats-card>
        </div>
      </div>
      

       <modal v-model:show="modals.modal1">
          <template v-slot:header>
            <h5 class="modal-title" id="modal-title-default">ALARM</h5>
          </template>
          <p>쓰레기통 내부 온도가 {{model.CurTemp}}°C로 설정 값인 {{model2.CurTemp}}°C보다 높습니다.</p>
          <p>주기를 다음 값으로 재 설정할까요?</p>
          <p>만약 아니라면, 직접 입력해 주세요.</p>
          <base-input formClasses="input-group-alternative" placeholder="Input Term" v-model="model.Term"></base-input>
          <p>설정 값이 비정상적이라고 판단될 시 기존 값이 유지됩니다.</p>
          <p>이 값으로 설정을 완료하시겠습니까?</p>

          <template v-slot:footer>
              <base-button type="primary" @click="changeterm">Save changes</base-button>
              <base-button id='close_btn' type="secondary" class="ml-auto" @click="modals.modal1 = false">Close
              </base-button>
          </template>
      </modal>

      <modal v-model:show="modals.modal2">
          <template v-slot:header>
            <h5 class="modal-title" id="modal-title-default">ALARM</h5>
          </template>
          <p>현재 쓰레기의 양이 {{model.CurAmount}}ml로 설정 값인 {{model2.SetAmount}}ml보다 많습니다.</p>
          <p>주기를 다음 값으로 재 설정할까요?</p>
          <p>만약 아니라면, 직접 입력해 주세요.</p>
          <base-input formClasses="input-group-alternative" placeholder="Input Term" v-model="model.Term"></base-input>
          <p>설정 값이 비정상적이라고 판단될 시 기존 값이 유지됩니다.</p>
          <p>이 값으로 설정을 완료하시겠습니까?</p>

          <template v-slot:footer>
              <base-button type="primary" @click="changeterm">Save changes</base-button>
              <base-button id='close_btn' type="secondary" class="ml-auto" @click="modals.modal2 = false">Close
              </base-button>
          </template>
      </modal>

      <modal v-model:show="modals.modal3">
          <template v-slot:header>
            <h5 class="modal-title" id="modal-title-default">ALARM</h5>
          </template>
          <p>쓰레기통 내부 온도가 {{model.CurTemp}}°C로 설정 값인 {{model2.CurTemp}}°C보다 낮습니다.</p>
          <p>주기를 다음 값으로 재 설정할까요?</p>
          <p>만약 아니라면, 직접 입력해 주세요.</p>
          <base-input formClasses="input-group-alternative" placeholder="Input Term" v-model="model.Term"></base-input>
          <p>설정 값이 비정상적이라고 판단될 시 기존 값이 유지됩니다.</p>
          <p>이 값으로 설정을 완료하시겠습니까?</p>

          <template v-slot:footer>
              <base-button type="primary" @click="changeterm">Save changes</base-button>
              <base-button id='close_btn' type="secondary" class="ml-auto" @click="modals.modal3 = false">Close
              </base-button>
          </template>
      </modal>

      <modal v-model:show="modals.modal4">
          <template v-slot:header>
            <h5 class="modal-title" id="modal-title-default">ALARM</h5>
          </template>
          <p>현재 쓰레기의 양이 {{model.CurAmount}}ml로 설정 값인 {{model2.SetAmount}}ml보다 적습니다.</p>
          <p>주기를 다음 값으로 재 설정할까요?</p>
          <p>만약 아니라면, 직접 입력해 주세요.</p>
          <base-input formClasses="input-group-alternative" placeholder="Input Term" v-model="model.Term"></base-input>
          <p>설정 값이 비정상적이라고 판단될 시 기존 값이 유지됩니다.</p>
          <p>이 값으로 설정을 완료하시겠습니까?</p>

          <template v-slot:footer>
              <base-button type="primary" @click="changeterm">Save changes</base-button>
              <base-button id='close_btn' type="secondary" class="ml-auto" @click="modals.modal4 = false">Close
              </base-button>
          </template>
      </modal>

      

  </div>
</template>

<script>
setInterval(function(){
             
            var timer = new Date();
            var h = timer.getHours();
            var m = timer.getMinutes();
            var s = timer.getSeconds();
            document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
        },1000);




import axios from 'axios';


export default {

  data() {
    
    return {
      

      model:{
        Term:"", //사용자한테 권할 Term값
        CurAmount:"", //실제 Amount값
        CurTemp:"", //실제 temp값
        CurCheck:"", //1일때 알림 
      },

      model2:{
        SetAmount:"", //사용자 설정 Amount값
        CurTerm:"",
        CUrTemp:"", // 사용자 설정 Temp값
      },

     modals:{
       modal1:false,
       modal2:false,
       modal3:false,
       modal4:false,
     },
     

    };
    
  },

  methods: {
					changeterm: function() {
						axios.post('http://127.0.0.1:3000/change_term',{
							time: this.model.Term
						})
							.then(function(response) {
								console.log(response);
							});
            location.reload();
					}
				},

  

  created(){ // DB 데이터 로드
          console.log(this.model);
          let test2=axios.get('http://127.0.0.1:3000/bin_load').then((res)=>{
            this.model.CurTemp = res.data.Temp;
            this.model.CurAmount = res.data.Amount;
            this.model.CurCheck = res.data.Check;
          })
          console.log(test2);
          console.log(this.model2);
          let test3=axios.get('http://127.0.0.1:3000/set_load').then((resp)=>{
         this.model2.CurTemp=resp.data.Temp;
         this.model2.CurTerm = resp.data.Term;
         this.model2.SetAmount = resp.data.Amount;

          document.documentElement.style.getPropertyValue("--value");
          document.documentElement.style.setProperty("--value", parseInt(this.model.CurAmount/1500*100));
         console.log(resp.data.Term);

         this.model.Term = parseInt(3*this.model2.CurTerm/4); //사용자한테 권하는 값
        if (this.model.CurCheck ==1){
         if (parseInt(this.model.CurTemp) > parseInt(this.model2.CurTemp)){
              this.modals.modal1 = true;
              
            }
            else if(parseInt(this.model.CurTemp) < parseInt(this.model2.CurTemp)){
            this.modals.modal3 = true;
          }
        }
        if(this.model.CurCheck ==1){
          if(parseInt(this.model.CurAmount) > parseInt(this.model2.SetAmount)){
            this.modals.modal2 = true;
          }
            else if(parseInt(this.model.CurAmount) < parseInt(this.model2.SetAmount)){
            this.modals.modal4 = true;
          }
        }
         
          
         
        })
        console.log(test3);
        setTimeout(()=>{
          location.reload();
          },300000);


      
    
    },


  
};


</script>
<style>


:root {
    --value : 0;
}  



@keyframes growProgressBar {
  0%, 33% { --pgPercentage: 0; }
  100% { --pgPercentage: var(--value); }
}

@property --pgPercentage {
  syntax: '<number>';
  inherits: false;
  initial-value: 0;
}


div[role="progressbar"] {
  --size: 12rem;
  --fg: #369;
  --bg: #def;
  --pgPercentage: var(--value);
  animation: growProgressBar 3s 1 forwards;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: 
    radial-gradient(closest-side, white 80%, transparent 0 99.9%, white 0),
    conic-gradient(var(--fg) calc(var(--pgPercentage) * 1%), var(--bg) 0)
    ;
  font-family: Helvetica, Arial, sans-serif;
  font-size: calc(var(--size) / 5);
  color: var(--fg);
}

div[role="progressbar"]::before {
  counter-reset: percentage var(--value);
  content: counter(percentage) '%';
}


</style>
