className={`py-2 px-4 font-medium text-sm ${
                activeTab === 'insights' 
                  ? 'border-b-2 border-green-600 text-green-600' 
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab('insights')}
            >
              Insights
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {activeTab === 'overview' && (
          <>
            {/* Wellness Metrics */}
            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Wellness Metrics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Mind Metric */}
                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
                  <div className="relative w-16 h-16 mr-4">
                    <svg className="w-full h-full" viewBox="0 0 160 160">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="12"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke={wellnessScores.mind.color}
                        strokeWidth="12"
                        strokeDasharray="439.8"
                        strokeDashoffset={439.8 - ((wellnessScores.mind.value / 100) * 439.8)}
                        strokeLinecap="round"
                        transform="rotate(-90 80 80)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <span className="text-sm font-bold text-gray-800">{wellnessScores.mind.value}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Brain className="w-4 h-4 text-green-500 mr-1" />
                      <h3 className="font-medium text-gray-800">Mind</h3>
                    </div>
                    <span className="text-sm text-green-500">{wellnessScores.mind.status}</span>
                  </div>
                </div>

                {/* Body Metric */}
                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
                  <div className="relative w-16 h-16 mr-4">
                    <svg className="w-full h-full" viewBox="0 0 160 160">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="12"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke={wellnessScores.body.color}
                        strokeWidth="12"
                        strokeDasharray="439.8"
                        strokeDashoffset={439.8 - ((wellnessScores.body.value / 100) * 439.8)}
                        strokeLinecap="round"
                        transform="rotate(-90 80 80)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <span className="text-sm font-bold text-gray-800">{wellnessScores.body.value}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Activity className="w-4 h-4 text-yellow-500 mr-1" />
                      <h3 className="font-medium text-gray-800">Body</h3>
                    </div>
                    <span className="text-sm text-yellow-500">{wellnessScores.body.status}</span>
                  </div>
                </div>

                {/* Spirit Metric */}
                <div className="bg-white rounded-xl shadow-sm p-4 flex items-center">
                  <div className="relative w-16 h-16 mr-4">
                    <svg className="w-full h-full" viewBox="0 0 160 160">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke="#e6e6e6"
                        strokeWidth="12"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        fill="none"
                        stroke={wellnessScores.spirit.color}
                        strokeWidth="12"
                        strokeDasharray="439.8"
                        strokeDashoffset={439.8 - ((wellnessScores.spirit.value / 100) * 439.8)}
                        strokeLinecap="round"
                        transform="rotate(-90 80 80)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col justify-center items-center">
                      <span className="text-sm font-bold text-gray-800">{wellnessScores.spirit.value}</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      <Sun className="w-4 h-4 text-blue-500 mr-1" />
                      <h3 className="font-medium text-gray-800">Spirit</h3>
                    </div>
                    <span className="text-sm text-blue-500">{wellnessScores.spirit.status}</span>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Recent Activities */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Recent Activities</h2>
                <Link href="/health-log" className="text-sm text-green-600">See All</Link>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0">
                      <div className="bg-gray-100 rounded-full p-2 mr-3">
                        {activity.icon}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{activity.name}</div>
                        <div className="text-xs text-gray-500">{activity.timestamp}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm">{activity.duration}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 text-green-600 border border-green-600 rounded-md font-medium flex items-center justify-center">
                  <Plus className="h-4 w-4 mr-2" /> Add Activity
                </button>
              </div>
            </section>
            
            {/* Top Goals */}
            <section className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Your Top Goals</h2>
                <button onClick={() => setActiveTab('goals')} className="text-sm text-green-600">See All</button>
              </div>
              <div className="bg-white rounded-xl shadow-sm p-4">
                <div className="space-y-4">
                  {goals.slice(0, 2).map((goal) => (
                    <div key={goal.id}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{goal.name}</span>
                        <span className="text-sm text-gray-500">{goal.progress}/{goal.target} {goal.unit}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div 
                          className={`h-2.5 rounded-full ${
                            goal.category === 'mind' ? 'bg-green-600' :
                            goal.category === 'body' ? 'bg-yellow-500' : 'bg-blue-500'
                          }`} 
                          style={{ width: `${goal.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Insight Cards */}
            <section>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">Your Insights</h2>
                <button onClick={() => setActiveTab('insights')} className="text-sm text-green-600">See All</button>
              </div>
              <div className="space-y-4">
                {insights.map((insight) => (
                  <div 
                    key={insight.id} 
                    className={`bg-white rounded-xl shadow-sm p-4 border-l-4 ${
                      insight.category === 'mind' ? 'border-green-500' :
                      insight.category === 'body' ? 'border-yellow-500' : 'border-blue-500'
                    }`}
                  >
                    <h3 className="font-medium text-gray-800 mb-1">{insight.title}</h3>
                    <p className="text-sm text-gray-600">{insight.description}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
        
        {activeTab === 'goals' && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">All Goals</h2>
              <button className="text-sm text-gray-600 flex items-center">
                Filter
              </button>
            </div>
            
            <div className="space-y-4">
              {goals.map((goal) => (
                <div key={goal.id} className="bg-white rounded-xl shadow-sm p-4">
                  <div className="flex justify-between mb-1">
                    <div className="flex items-center">
                      {goal.category === 'mind' ? <Brain className="w-4 h-4 text-green-500 mr-2" /> :
                       goal.category === 'body' ? <Activity className="w-4 h-4 text-yellow-500 mr-2" /> :
                                                  <Sun className="w-4 h-4 text-blue-500 mr-2" />}
                      <span className="font-medium">{goal.name}</span>
                    </div>
                    <div className="text-sm bg-gray-100 px-2 py-0.5 rounded">
                      {goal.category.charAt(0).toUpperCase() + goal.category.slice(1)}
                    </div>
                  </div>
                  
                  <div className="flex justify-between mt-3 mb-1">
                    <span className="text-sm text-gray-500">Progress</span>
                    <span className="text-sm font-medium">{goal.progress}/{goal.target} {goal.unit}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className={`h-2.5 rounded-full ${
                        goal.category === 'mind' ? 'bg-green-600' :
                        goal.category === 'body' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`} 
                      style={{ width: `${goal.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-3 text-green-600 font-medium flex items-center justify-center bg-white rounded-xl shadow-sm">
                <Plus className="h-4 w-4 mr-2" /> Add New Goal
              </button>
            </div>
          </section>
        )}
        
        {activeTab === 'insights' && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Wellness Insights</h2>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-500 mr-2" />
                <h3 className="text-lg font-medium text-gray-800">Your Wellness Trends</h3>
              </div>
              <p className="text-sm text-gray-600 text-center mb-4">
                Analyzing your weekly trends to provide personalized insights.
              </p>
              
              <div className="h-40 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-400 text-sm">Weekly trends chart coming soon</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {insights.map((insight) => (
                <div 
                  key={insight.id} 
                  className={`bg-white rounded-xl shadow-sm p-4 border-l-4 ${
                    insight.category === 'mind' ? 'border-green-500' :
                    insight.category === 'body' ? 'border-yellow-500' : 'border-blue-500'
                  }`}
                >
                  <h3 className="font-medium text-gray-800 mb-1">{insight.title}</h3>
                  <p className="text-sm text-gray-600">{insight.description}</p>
                </div>
              ))}
              
              <div className="bg-white rounded-xl shadow-sm p-4 border-l-4 border-gray-300">
                <h3 className="font-medium text-gray-800 mb-1">More Insights Coming</h3>
                <p className="text-sm text-gray-600">
                  Continue tracking your wellness activities to receive more personalized insights.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>
      
      <BottomNav />
    </div>
  );
}
