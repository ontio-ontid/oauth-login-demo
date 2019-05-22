(function(){
    var addEvent = function (element, event, func) {
        if (!element) {
            return;
        }
        if (typeof func !== 'function') {
            return;
        }
        if (element.attachEvent) {
            element.attachEvent("on" + event, func)
        } else {
            if (element.addEventListener) {
                element.addEventListener(event, func, false)
            } else {
                element["on" + event] = func
            }
        }
    }

    function randomId() {
        return Math.random().toString(36).substring(2, 10);
    }

    // 注册点击事件代理，处理登录请求
    addEvent(document, 'click', function (e) {
        var e = e || window.event;
        var target = e.target || ev.srcElement;
        var dapp_ontid = target.getAttribute('dapp-ontid')
        if (target.getAttribute('id') && target.getAttribute('id') === 'ontid_wechat_login') {
            handle(dapp_ontid)
        }
    })

    function handle(dapp_ontid) {
        // 1. create state
        var state = dapp_ontid + new Date().getTime() + randomId();
        // 2. send state to backend
        var url = '';
        var appid = 'wx520c15f417810387',
            callback_url = '';
        callback_url = encodeURIComponent(callback_url)
        var oauth_url = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${appid}&redirect_uri=${callback_url}&response_type=code&scope=snsapi_base&state=${state}#wechat_redirect`
        fetch(url).then(res => {
            console.log(res)
            // 3. oauth2
            window.location.href = oauth_url;
            // 4. set polling
            setRequestPolling(state)
        })
    }

    function setRequestPolling(state) {
        
        var interval = setInterval(()=>{
            var url = ''
            fetch(url).then(res => {
                var result = res.json();
                if(result.access_token) {
                    //succeed
                    
                }
            })
        }, 5000)
        var timeoutId = setTimeout(() => {
            window.clearInterval(interval)
            window.clearTimeout(timeoutId)
            //超时
        }, 30 * 1000)
    }
})()