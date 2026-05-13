import { CalendarDays, Clock, TrendingUp } from "lucide-react";
import styles from "./LeaveBalance.module.css"; 

export default function LeaveBalance({a=5 ,b=4 ,c=1}) {
    return (
        
        <div className={styles.page}>


            <nav className={styles.topNav}>
                <div className={styles.navItem}>
                    <CalendarDays size={16}/>
                    <span>Dashboard</span>
                </div>

                <div className={styles.navItem}>
                    <span>+</span>
                    <span>Apply</span>
                </div>

                <div className={styles.navItem}>
                    <Clock size={16}/>
                    <span>My Leave</span>
                </div>

                <div className={`${styles.navItem} ${styles.activeNav}`}>
                    <TrendingUp size={16}/>
                    <span>Balance</span>
                </div>
            </nav>


        <section className={styles.container}> 
            <h2 className={styles.headerTitle}>
               
                <CalendarDays className={styles.headerIcon} size={20}/>
                Leave Balance Overview
            </h2>
            
            <div className={styles.list}>

              
                <article className={`${styles.card} ${styles.blue}`}>
                    <div className={styles.cardHeader}>
                        <div className={styles.infoSide}> 
                            <div className={styles.iconWrapper}><CalendarDays size={20} /></div>
                            <div>
                                <h3 className={styles.leaveType}>Casual Leave</h3>
                                <p className={styles.remainingText}> 12 days remaining </p>
                            </div>
                        </div>
                        <div className={styles.statsSide}>
                            <p className={styles.count}>{a}/20</p>
                            <p className={styles.label}>Available</p>
                        </div>
                    </div>
                    <div className={styles.progressInfo}>
                        <span>Used: 8 days</span>
                        <span>40%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                        <div className={styles.progressBarFill} style={{ width: "40%" }} />
                    </div>
                </article>

                
                <article className={`${styles.card} ${styles.green}`}>
                    <div className={styles.cardHeader}>
                        <div className={styles.infoSide}>
                            <div className={styles.iconWrapper}><Clock size={20} /></div>
                            <div>
                                <h3 className={styles.leaveType}>Sick Leave</h3>
                                <p className={styles.remainingText}> 8 days remaining </p>
                            </div>
                        </div>
                        <div className={styles.statsSide}>
                            <p className={styles.count}>{b}/10</p>
                            <p className={styles.label}>Available</p>
                        </div>
                    </div>
                    <div className={styles.progressInfo}>
                        <span>Used: 2 days</span>
                        <span>20%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                        <div className={styles.progressBarFill} style={{ width: "20%" }} />
                    </div>
                </article>


                <article className={`${styles.card} ${styles.purple}`}>
                    <div className={styles.cardHeader}>
                        <div className={styles.infoSide}>
                            <div className={styles.iconWrapper}><TrendingUp size={20} /></div>
                            <div>
                                <h3 className={styles.leaveType}>Earned Leave</h3>
                                <p className={styles.remainingText}>20 days remaining</p>
                            </div>
                        </div>
                        <div className={styles.statsSide}>
                           <p className={styles.count}>{c}/25</p>
                           <p className={styles.label}>Available</p>
                        </div>
                    </div>
                    <div className={styles.progressInfo}>
                      <span>Used: 5 days</span>
                      <span>20%</span>
                    </div>
                    <div className={styles.progressBarBg}>
                        <div className={styles.progressBarFill} style={{ width: "20%" }} />
                    </div>
                </article>
 
            </div>
        </section>


{/* Upcoming Approved Leaves Section */}
        <section className={styles.container} style={{marginTop: '20px'}}>
            <h2 className={styles.headerTitle}>Upcoming Approved Leaves</h2>
            <div className={styles.upcomingList}>
                <div className={styles.upcomingItem}>
                <div>
                    <p className={styles.dateText}>Dec 25, 2024</p>
                    <p className={styles.leaveSubText}>Casual Leave</p>
                </div>
                <span className={styles.statusApproved}>Approved</span>
            </div>
            <div className={styles.upcomingItem}>
                <div>
                    <p className={styles.dateText}>Jan 15, 2025</p>
                    <p className={styles.leaveSubText}>Earned Leave</p>
                </div>
                <span className={styles.statusPending}>Pending</span>
            </div>
            </div>
        </section>


 {/* Year-to-Date Summary  */}
             <section className={styles.container}>
                <h2 className={styles.headerTitle}>
                    <TrendingUp className={styles.headerIcon} size={20}/>
                    Year-to-Date Summary
                </h2>

                <div className={styles.summaryContainer}>

                    <div className={`${styles.summaryCard} ${styles.blueSummary}`}>
                        <p className={styles.summaryNumber}>15</p>
                        <p className={styles.summaryLabel}>Total Used</p>
                    </div>

                    <div className={`${styles.summaryCard} ${styles.greenSummary}`}>
                        <p className={styles.summaryNumber}>40</p>
                        <p className={styles.summaryLabel}>Total Available</p>
                    </div>
                </div>
        </section>
        
        </div>            
    )
}

