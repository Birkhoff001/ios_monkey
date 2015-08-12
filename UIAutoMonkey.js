    config: {
        numberOfEvents: 1000,       //需要产生随机事件的个数
        delayBetweenEvents: 0.05,    //两个事件之间的延迟时间
        eventWeights: {              //每个事件的触发几率
            tab: 30,
            drag: 1,
            flick: 1,
            orientation: 1,
            clickVolumeUp: 1,
            clickVolumeDown: 1,
            lock: 1,
            pinchClose: 10,
            pinchOpen: 10,
            shake: 1
        },

        // Probability that touch events will have these different properties
        touchProbability: {         //default tab就是单击事件，调整这些参数可以设置双击，长按事件发生的频率。这些值界于0，1之间
            multipleTaps: 0.05,
            multipleTouches: 0.05,
            longPress: 0.05
        }
        }
