<template>
                    <div v-if="!sidebar"
                    class="absolute left-full rounded-md px-4 py-4 bg-[--color-secondary] text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
                    <ul style="">
												<li data-menu-item="modern-project-dashboard" class="menu-item text-[--text-secondary] hover:bg-indigo-50 hover:text-blue-600">
													<a class="h-full w-full flex items-center" href="modern-project-dashboard.html">
														<span>Dashboard</span>
													</a>
												</li>
												<li data-menu-item="modern-project-list" class="menu-item">
													<a class="h-full w-full flex items-center" href="modern-project-list.html">
														<span>Project List</span>
													</a>
												</li>
												<li data-menu-item="modern-scrum-board" class="menu-item">
													<a class="h-full w-full flex items-center" href="modern-scrum-board.html">
														<span>Scrum Board</span>
													</a>
												</li>
												<li data-menu-item="modern-issue" class="menu-item">
													<a class="h-full w-full flex items-center" href="modern-issue.html">
														<span>Issue</span>
													</a>
												</li>
											</ul>
                </div>
</template>